import React, {useState} from 'react';
import Form from './component/Form';
import ItemList from './component/ItemList';
import {v4 as uuidv4} from 'uuid';

function App(){

  const [articles, setArticles] = useState([])

  const addArticle = (article) => {

    article.id = uuidv4();
    const newArticles = [...articles, article]
    setArticles(newArticles);

  }

  const deleteArticle = (id_article) => {

    let newArticles = [];
    articles.map((article) => {
      
      if(article.id !== id_article){
        newArticles.push(article);
      }
    })

    setArticles(newArticles);

  }

  const setQuantity = (newQuantity, id_article) => {

     let newArticles = articles.map((article) => {
      
      if(article.id === id_article){
        article.quantity = newQuantity;
      }
      return article;
    })
    
    setArticles(newArticles);

  }

  const setName = (newName,id_article) => {

    let newArticles = articles.map((article) => {
      
      if(article.id === id_article){
        article.name = newName;
      }
      return article;
    })
    
    setArticles(newArticles);

  }

return (
  <div className="container">
    <h3>Liste de courses</h3>
    <Form formTitle="Ajouter un article" addArticle={addArticle}/>
    <ItemList articles={articles} deleteArticle={deleteArticle} setQuantity={setQuantity} setName={setName} />
  </div>
)

}

export default App;
