import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from pymongo.mongo_client import MongoClient
from Users import user16 as user

uri = "mongodb+srv://gemknight1997:InfernoFire1997@cluster0.u0s2mdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri)
db = client.your_database

def main():
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    # metrics = []
    SAMPLE_SIZE = 2
    count = 0
    start_time = time.time()
    presence_time = start_time
    user.userAction(driver)
    num_clicks = 0
    while count < SAMPLE_SIZE:
        metrics = []

        # Track presence time 
        current_time = time.time()
        presence_time = current_time - start_time
        print(f"Presence time: {presence_time} seconds")
    
        # Track scrolling
        scroll_height = driver.execute_script("return document.body.scrollHeight")  
        current_scroll = driver.execute_script("return window.pageYOffset")
        print(f"Scrolled {current_scroll}/{scroll_height} pixels")
        #metrics["Scrolling (Pixels)"],append(current_scroll/scroll_height)
    
        #Monitor title
        title = driver.title
        print(f"Title: {title} ")

        #Track clicks
        button = driver.find_element(By.TAG_NAME, "button")
        button.click()
        num_clicks += 1
        print(f"Number of clicks: {num_clicks}")

        # Monitor paragraph contents
        paragraphs = driver.find_elements(By.TAG_NAME, "p")
        for paragraph in paragraphs:
            paragraph_text = paragraph.text
            print(f"Paragraph: {paragraph_text}")

        metrics.append({"TIMESTAMP (HH:MM:SS)": time.strftime("%H:%M%S", time.localtime()),
                        "Presence time (Seconds)" : presence_time,
                        "Scrolling (Pixels)" : current_scroll/scroll_height,
                        "Title" : title,
                        "Number of Clicks" : num_clicks,
                        "Pragraph" : paragraph_text } )
    
        db.collection.insert_many(metrics)
        count += 1
        time.sleep(2) 

    #driver.quit()
    print(metrics)

if __name__ == "__main__":
    main()
    
