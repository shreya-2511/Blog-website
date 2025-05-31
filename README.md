# Blog_space
📝 Simple Blog Website (No Database)

This is a basic blog website built using **Node.js**, **Express**, and **EJS**. It allows users to **create**, **view**, **edit**, and **delete** blog posts using HTTP requests like **GET**, **POST**, **PATCH**, and **DELETE**.

All posts are stored **in memory**, so they will be lost once the server restarts. This project is perfect for learning how RESTful routes and server-side rendering work.


✨ Features
- Create blog posts with title, content, and author name
- View all posts on the "post" page
- Edit or delete any post
- RESTful routing using Express
- Templating with EJS


🛠️ Tech Used
- **Node.js**
- **Express**
- **EJS** (for HTML templates)
- **method-override** (to support PUT/PATCH and DELETE)
- **Nodemon** (for development)

▶️ How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
````

2. Install dependencies:
   ```bash
   npm install
   npm i express ejs method-override
   
   ```

3. Start the server:
   ```bash
   nodemon index.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:2500
   ```

📌 Notes
* Posts are stored in-memory (not saved to a database)
* You can use `/compose` to add a post
* You can click on a post to view it, edit it, or delete it

