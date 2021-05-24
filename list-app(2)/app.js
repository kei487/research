const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/site',(req,res) =>{
  res.render('site.ejs');
});

app.listen(3000);