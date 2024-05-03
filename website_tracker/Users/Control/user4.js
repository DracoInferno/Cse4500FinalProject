const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

let Presencetime = 0; 
let url = "https://www.sycamorecanyons.com/"; 
  
(async function firstTest() {
    let driver;
  
    try {
      driver = await new Builder().forBrowser('chrome').build(); // Component 1 Start the Session
      await driver.get(url); // component 2 Take action on browser
      let body = await driver.findElement(By.tagName("body")).getText()
      let count = (body.match(/dog/g) || []).length
      let imgs = (await driver.findElements(By.tagName("img")))
      for (let img of imgs) {
        let alt = await img.getAttribute("alt")
        if (alt && (alt.match(/dog/g)|| []).length > 0) {
            count ++
        }
      }
      Presencetime = count * 10 
      console.log("url: " , url)
      console.log("Presencetime: " , Presencetime)
    } catch (e) {
      console.log(e)
    } finally {
      await driver.quit(); // component 8 ending the session 
    }
  }())