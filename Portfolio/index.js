const express = require('express')
const app = express()
const port = 3000

const hbs = require("hbs");
const path = require("path");
app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/projet/MatinBrun', (req, res) => {
    res.render('projects/MatinBrun');
})

app.get('/projet/VReeducation', (req, res) => {
    res.render('projects/VReeducation');
})

app.get('/projet/HeroForge', (req, res) => {
    res.render('projects/HeroForge');
})

app.get('/projet/Vapeur', (req, res) => {
    res.render('projects/Vapeur');
})

app.get('/projet/RouagesDuDestin', (req, res) => {
    res.render('projects/RouagesDuDestin');
})

app.get('/projet/SpiritGame', (req, res) => {
    res.render('projects/SpiritGame');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})