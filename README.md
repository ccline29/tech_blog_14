## tech_blog_14

## Table of Contents
-  [Description](#description) 
-  [Usage](#usage)
-  [Project Resources](#project-resources)
-  [Screenshot](#screenshot)
-  [Live URL](#live-url)
-  [License](#license)

## Description
I want to be a Developer who writes about tech, using a CMS-style blog site that I can publish articles, blog posts, and my thoughts and opinions 

## Usage
1. Install Node.js
2. Open integrated terminal in VS Code
3. Run npm install to install the dependencies in package.json.
4. In VS Code,sign into your MySQL database by running `mysql -u root -p` then enter your password
5. From the Command Line run `SOURCE db/schema.sql;` 
6. Next run `USE blog_db ;`
7. Next you will need to seed your database.  Exit MySQL and run `node seeds/index.js`
8. Once you database is seeded you can run `node server.js` to start your server.
 

## Project Resources
1. NODE.js
2. express-handlebars 
3. MYSQL2 
4. Sequelize
5. Express.js
6. dotenv
7. bcrypt
8. express-session

## Screenshot
<img width="1234" alt="Screenshot 2023-03-21 at 10 25 33 PM" src="https://user-images.githubusercontent.com/115193125/226794542-71b11abd-43b3-4c77-8955-e29ec16deb5f.png">

## Live URL
https://warm-lowlands-69600.herokuapp.com/


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)