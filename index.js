import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("publics"));
app.use(bodyParser.urlencoded({extended:true}));

const titleName = [];
const blogList = [];

app.get("/" , (req , res) =>{
    res.render("index.ejs");
});

app.get("/posts" ,(req , res) => {
    console.log(titleName);
    console.log(blogList);
    res.render("main.ejs" , {
        t3 : titleName,
        post3 : blogList,
    });
});

app.get("/create" , (req , res) => {
    
    res.render("post.ejs");
});

app.post("/submit" , (req , res) => {
    const title = req.body["titleN"];
    titleName.push(title);

    let w = req.body["inputText"];
    blogList.push(w);
    res.redirect("/posts");
});




app.listen( port , () => {
    console.log(`Server has successfully started on port ${port}`);
});