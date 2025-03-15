IBAN Balloting System
The IBAN Balloting System is a web application designed to randomly allocate players to one of four teams. It features a user-friendly interface for players to input their names and automatically assigns them to a team. The system also includes an admin panel for exporting results to an Excel file and resetting the balloting process.

Features
Player Allocation:

Players can input their names and are randomly assigned to one of four teams.

Ensures unique player names to avoid duplicates.

Admin Panel:

Admins can log in to access the dashboard.

Export player data (name and team) to an Excel file.

Reset the balloting process (clear all player data).

Database:

Stores player names and their allocated teams in a MongoDB database.

Deployment:

Easily deployable to platforms like Render.

Technologies Used
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB

Excel Export: exceljs

Session Management: express-session

Deployment: Render

Setup and Installation
Prerequisites
Node.js: Install Node.js (version 18.x or higher) from nodejs.org.

MongoDB Atlas: Create a free MongoDB Atlas cluster at mongodb.com.

Git: Install Git from git-scm.com.

Step 1: Clone the Repository
Clone the repository to your local machine:

bash
Copy
git clone https://github.com/isaacadetunji/iban-balloting-system.git
cd iban-balloting-system
Step 2: Install Dependencies
Install the required dependencies using npm:

bash
Copy
npm install
Step 3: Set Up Environment Variables
Create a .env file in the root directory and add the following variables:

plaintext
Copy
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/iban-balloting?retryWrites=true&w=majority
SESSION_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
Replace <username>, <password>, and cluster0 with your MongoDB Atlas credentials.

Step 4: Run the Application
Start the application in development mode:

bash
Copy
npm run dev
The application will be available at http://localhost:3000.

Step 5: Deploy to Render
Push your code to a GitHub repository.

Go to Render and create a new Web Service.

Connect your GitHub repository and deploy.

Set the environment variables in the Render dashboard:

MONGODB_URI

SESSION_SECRET

ADMIN_USERNAME

ADMIN_PASSWORD

Usage
Player Interface
Open the application in your browser.

Enter your name in the input field and click Select Team.

The system will assign you to a team and display the result.

Admin Interface
Go to /admin/login and log in using the admin credentials.

In the admin dashboard:

Click Export to Excel to download the player data as an Excel file.

Click Reset Balloting to clear all player data.

File Structure
Copy
iban-balloting-system/
├── public/
│   ├── index.html          # Player interface
│   ├── admin-login.html    # Admin login page
│   ├── admin-dashboard.html # Admin dashboard
│   ├── styles.css          # CSS for the interface
│   └── script.js           # Frontend JavaScript
├── server.js               # Main server file
├── models/
│   └── Player.js           # MongoDB schema for players
├── routes/
│   ├── players.js          # API routes for players
│   └── admin.js            # API routes for admin
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
Environment Variables
Variable Name	Description
MONGODB_URI	MongoDB connection string.
SESSION_SECRET	Secret key for session encryption.
ADMIN_USERNAME	Username for admin login.
ADMIN_PASSWORD	Password for admin login.
Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeature).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to MongoDB Atlas for providing a free database service.

Thanks to Render for their free hosting service.

Contact
For questions or feedback, please contact:

Isaac Adetunji

GitHub: isaacadetunji

Enjoy using the IBAN Balloting System! 🎉
