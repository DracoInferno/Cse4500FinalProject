import time
from selenium import webdriver
import sqlite3
from Users import user31 as users

# Connect to SQLite database
conn = sqlite3.connect('metrics.db')
cursor = conn.cursor()

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

# Create metrics table if not exists
cursor.execute('''CREATE TABLE IF NOT EXISTS metrics 
                (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                iteration_number INTEGER,
                group TEXT,
                user_file TEXT,
                presence_time REAL)''')

# Define control and test groups
control_group = "Control"
test_group = "Test"

# Define number of iterations (you need to adjust this according to your test scenario)
num_iterations = 10

for iteration in range(1, num_iterations + 1):
    for user_file in users:
        # Track presence time 
        start_time = time.time()

        # Determine group (assuming alternate assignment)
        group = control_group if (iteration % 2 == 1) else test_group

        # Simulate user action (assuming there is a function called userAction)
        userAction(driver)

        # Calculate presence time
        presence_time = time.time() - start_time

        # Store metrics in the database
        cursor.execute('''INSERT INTO metrics (iteration_number, group, user_file, presence_time)
                        VALUES (?, ?, ?, ?)''', (iteration, group, user_file, presence_time))
        conn.commit()

        time.sleep(2)

driver.quit()
