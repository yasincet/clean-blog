const express = require('express');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/blog-test-db', { useNewUrlParser: true, useUnifiedTopology: true })


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const posts = Post.find({}).then(posts => {
    res.render('index', { posts: posts });
  })});
  


  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('/add_post', (req, res) => {
    res.render('add_post');
  });

  app.get('/post', (req, res) => {
    res.render('post');
  });

  app.post('/posts', async (req, res) => {
    await Post.create(req.body)
    res.redirect('/');
  });



  const port = 3000;

  app.listen(port, () => console.log(`Server running on port ${port}`));