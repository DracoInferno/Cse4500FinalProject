import time
from selenium import webdriver
from pymongo import MongoClient
from Users import user40 as user

uri = "mongodb+srv://gemknight1997:InfernoFire1997@cluster0.u0s2mdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri)
db = client.your_database
collection = db.demo  # Change 'metrics' to your actual collection name

def main():
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    # Initialize presence time
    start_time = time.time()

    presence_time = start_time
    user.userAction(driver)
    current_time = time.time()

    presence_time = current_time - start_time 
    print(f"Presence time: {presence_time} seconds")

    metrics = {
            "Iteration Number": "Last",
            "Control or Test Group": "Demo",  # Update this based on your experiment setup
            "User File Name": "user40",  # Update this with the appropriate user file name
            "Presence Time (Seconds)": presence_time
        }

    # Insert metrics into the database
    collection.insert_one(metrics)

    # Increment count and wait for some time
    time.sleep(2)

    # Quit the driver
    driver.quit()

if __name__ == "__main__":
    main()
