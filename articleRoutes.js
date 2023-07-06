const express = require('express');
const articleRoutes = express.Router();

const articleData = require('./articleData');

articleRoutes.get('/getArticle',(req,res) =>{
  res.send(articleData);
})

articleRoutes.get('/getArticle/:likes/:author',(req,res) =>{
  let filteredArticles = articleData.filter(client => client.likes == req.params.likes && client.author == req.params.author )
  res.send(filteredArticles)
})

articleRoutes.get('/getArticle/:likes',(req,res) =>{
  let filteredArticles = articleData.filter(client => client.likes == req.params.likes )
  res.send(filteredArticles)
})

articleRoutes.post('/addArticle', (req, res) =>{
    const addData = req.body;
    let newId = articleData.length+1;
    articleData.push({id:newId,...addData});
    res.send('Data Created');
}) 

articleRoutes.delete('/deleteArticle/:id', (req, res) =>{
    const remainingArticle = articleData.filter(client => client.id !== parseInt(req.params.id));
    res.send(remainingArticle);
    
}) 

module.exports = articleRoutes;
