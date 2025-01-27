import express from "express";


const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/about-me', (req, res) => {
    res.render('aboutMe.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})