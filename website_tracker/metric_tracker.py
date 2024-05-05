import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from pymongo.mongo_client import MongoClient
from Users import user31 as user

uri = "mongodb+srv://gemknight1997:InfernoFire1997@cluster0.u0s2mdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri)
db = client.your_database

def main():
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    # metrics = []
    SAMPLE_SIZE = 10
    count = 0
    start_time = time.time()
    presence_time = start_time
    user.userAction(driver)
    
    # Loop through your tests
    while count < SAMPLE_SIZE:
        metrics = []
        
        # Add iteration number, control or test group, user file name, and presence time to metrics
        metrics.append({
            "Iteration Number": count + 1,
            "Control or Test Group": "Control",  # You need to update this based on your experiment setup
            "User File Name": "user16",  # Update this with the appropriate user file name
            "Presence Time (Seconds)": presence_time
        })

        # Insert metrics into the database
        db.collection.insert_many(metrics)

        # Increment count and wait for some time
        count += 1
        time.sleep(2)

    # Quit the driver
    driver.quit()

if __name__ == "__main__":
    main()