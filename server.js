/*const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World Paji');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

/*const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World Paji");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog")
})

app.get("/blog/:slug", (req, res) => {
  // logic to fetch {slug} from the db
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params);
  console.log(req.query);
  res.send(`hello $(req.params.slug)`)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


//to make the app static which uses public folder
app.use(express.static("public"));  

app.get("/index", (req, res) => {
res.sendFile("templates/index.html", {root: __dirname})
})*/

const blog = reqiure("./routes/blog");
app.use("/blog", blog)

//code for routes in blog.js

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("blog home page");
});

router.get('/blogpost/:slug', (req, res) => {
  res.send(`fethch the blogpost for ${req.params.slug}`)
})

module.exports = router;