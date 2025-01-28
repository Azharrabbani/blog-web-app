import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let blog = [];

// Get methods
app.get('/', (req, res) => {
    res.render('home.ejs', {blog});
});

app.get('/about-me', (req, res) => {
    res.render('aboutMe.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/add-post', (req, res) => {
    res.render('addPost.ejs');
})


// Post Methods
app.post('/submit-post', (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;

    console.log(title)
    console.log(desc)

    blog.push({title, desc});    
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})