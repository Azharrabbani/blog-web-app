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
});

app.get('/edit-post/:id', (req, res) => {
    const post = blog.find(p => p.id === req.params.id);
    if (post){
        res.render('edit.ejs', {post});
    }
    else{
        res.redirect('/')
    }
});

app.get('/blog-views/:id', (req, res) => {
    const post = blog.find(p => p.id === req.params.id);
    res.render('blogViews.ejs', {post});
})


// Post Methods
app.post('/submit-post', (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const id = Date.now().toString();

    console.log(title)
    console.log(desc)
    console.log(id)

    blog.push({id, title, desc});    
    res.redirect('/');
});

app.post('/edit-post/:id', (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const post = blog.find(p => p.id === req.params.id);

    if (post){
        post.title = title;
        post.desc = desc;
    }

    res.redirect('/');
});

app.post('/delete-post/:id', (req, res) => {
    blog = blog.filter(p => p.id !== req.params.id);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})