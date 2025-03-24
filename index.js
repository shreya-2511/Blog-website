import express from "express";
import methodOverride from "method-override";

const app = express();
const port = 2500;

let posts = [];
let postIdCount = 1;

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/compose", (req,res)=>{
    res.render("index.ejs");
});

app.post("/compose", (req,res)=>{
    const post = {
        id: postIdCount++,
        title: req.body["postTitle"],
        content: req.body["postBody"],
        blogger: req.body["blogger"],
        period: new Date().toLocaleDateString(),
    };
    posts.push(post);
    console.log(posts);
    res.redirect("/");
});

app.get('/post/:id', (req, res)=>{
    const postId = req.params.id;

    const post = posts.find(p => p.id == postId);

    if (post) {
        res.render("post.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.get('/post/:id/edit', (req, res) => {
    const postId = req.params.id;

    const post = posts.find(p => p.id == postId);

    if (post) {
        res.render('edit.ejs', { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.patch('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id == postId); 
    console.log(post);
    if (post) {
        post.title = req.body["postTitle"] || post.title;
        post.content = req.body["postBody"] || post.content;
        res.redirect(`/post/${postId}`); 
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id == postId);

    if (post) {
        posts = posts.filter(p => p.id != postId);
        res.redirect('/');
    } else {
        res.status(404).send("Post not found");
    }
});

app.get("/posts", (req,res)=>{
    res.render("posts.ejs", {posts});
});

app.get("/home", (req,res)=>{
    res.render("home.ejs")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  
