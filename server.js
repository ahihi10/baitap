
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Render home page
app.get('/home', (req, res) => {
  res.render('home', { layout: 'layout' }); 
});

// Render edu page
app.get('/edu', (req, res) => {
  res.render('edu', { layout: 'layout' });
});

//Render elearning page
app.get('/elearning', (req, res) => {
  res.render('elearning', { layout: 'layout' });
});

//Render grammar page
app.get('/grammar', (req, res) => {
  res.render('grammar', { layout: 'layout' });
});

//Render plagiarism page
app.get('/plagiarism', (req, res) => {
  res.render('plagiarism', { layout: 'layout' });
});

//Render game page
app.get('/game', (req, res) => {
  res.render('game', { layout: 'layout' });
});

//Render plan page
app.get('/plan', (req, res) => {
  res.render('plan', { layout: 'layout' });
});

//Render evaluate page
app.get('/evaluate', (req, res) => {
  res.render('evaluate', { layout: 'layout' });
});

//Render writecontent page
app.get('/writecontent', (req, res) => {
  res.render('writecontent', { layout: 'layout' });
});

//Render ads page
app.get('/ads', (req, res) => {
  res.render('ads', { layout: 'layout' });
});

//Render social page
app.get('/social', (req, res) => {
  res.render('social', { layout: 'layout' });
});

//Render video page
app.get('/video', (req, res) => {
  res.render('video', { layout: 'layout' });
});

//Render code page
app.get('/code', (req, res) => {
  res.render('code', { layout: 'layout' });
});

//Render writecode page
app.get('/writecode', (req, res) => {
  res.render('writecode', { layout: 'layout' });
});

//Render explain page
app.get('/explain', (req, res) => {
  res.render('explain', { layout: 'layout' });
});

//Render bug page
app.get('/bug', (req, res) => {
  res.render('bug', { layout: 'layout' });
});

//Render optimize page
app.get('/optimize', (req, res) => {
  res.render('optimize', { layout: 'layout' });
});

//Render about page
app.get('/about', (req, res) => {
  res.render('about', { layout: 'layout' });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
