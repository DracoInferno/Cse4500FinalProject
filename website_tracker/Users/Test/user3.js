//Annese's Unique User
const {By, Builder, until} = require('selenium-webdriver');
const assert = require('assert');
let total_reward_time = 0;

async function countElem(id, driver) {
    try{
        const selector = By.id(id);
    const elements = await driver.wait(until.elementsLocated(selector), 1000);
    return elements.length;
    } catch(error){
        console.log(error);
    }
    
}

async function findLink(href, driver) {
    try {
        let link = await driver.findElement(By.css(`a[href="${href}"]`));
        await link.click();
        return true;
      } catch (error) {
        return false;
      }
    
}
async function userAction(driver){
    const reward_time = 10000;
    let wait_time = 0;
    let numImages = 0;
    let keywords = ["I'm", 'Annese', 'me', 'my'];
    let ids = ['HyruleWarriors', 'Persona'];
    let hrefs = ['https://github.com/Annese3908/Platform-Computing'];

    let page_source = await driver.getPageSource();
    let keywordCounts = {}
    keywords.forEach(keyword => {
        keywordCounts[keyword] = 0;
    });
    keywords.forEach(async keyword =>{
        keywordCounts[keyword] = (page_source.match(new RegExp(keyword, 'g')) || []).length;
        console.log(`Found ${keyword}: ${keywordCounts[keyword]} times`);
        wait_time = reward_time * keywordCounts[keyword];
        total_reward_time += wait_time;
        await driver.sleep(wait_time);
        
    });
    // image interaction
    for (let id of ids){ 
        numImages += await countElem(id, driver);
        wait_time = reward_time * numImages;
        total_reward_time += wait_time;
        await driver.sleep(wait_time);
    }
    console.log(numImages + ' images found.');

    // link interaction
    for (let href of hrefs){
        while(await findLink(href, driver)){
            console.log(`${href} found.`);
            total_reward_time += reward_time;
            await driver.sleep(reward_time);
        }
    }
    return total_reward_time;
}
(async function trackMetrics(){
    let driver;
    try{
        // initialize driver
        driver = await new Builder().forBrowser('firefox').build();
        //navigate to website
        await driver.get('http://localhost:3000/');
        
        await userAction(driver);
    }catch(e){
        console.log(e);
    }
    finally{
        await driver.quit();
    }
    console.log(`Total reward time: ${total_reward_time} milliseconds`);
 }())
