require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// handlebars - partials
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Static server
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
    res.render('home',
        {
            title: "HBS",
            name: " Myron",
            company: "MyronJCM "
        });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: "HBS",
        name: " Myron",
        company: "MyronJCM "
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: "HBS",
        name: " Myron",
        company: "MyronJCM "
    });
});
app.listen(port, () => { console.log(`Server run in port ${port}`), port });
