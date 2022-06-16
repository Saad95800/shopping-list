import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ItemList from './components/ItemList';
import {connect} from 'react-redux';

function App(props) {

  const [articles, setArticles] = useState([]);
  const [id, setId] = useState(1)

  // const addArticle = (article)=>{
  //   setArticles([...articles, article]);
  //   setId(id + 1)
  // }

  // const addArticle = (article) => {
  //   // props.dispatch({type: 'ADD_ARTICLE', payload: article});
  //   props.addArticle(article);
  // }

  console.log(articles)
  return (
    <div className="container">
      <h3>Liste de courses</h3>
      <Form formTitle="Ajouter un article" addArticle={props.addArticle}/>
      <ItemList articles={props.articles} editArticle= {props.editArticle} id={id}/>
    </div>
  );
}

const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
}

const editArticleActionCreator = (article) => {
  return {
    type: 'EDIT_ARTICLE',
    payload: article
  }
}

const mapStateToProps = (state) => { // On appelle cette fonction comme on veux
  return {
    articles:  state.articles
  }
}

const mapDispatchToProps = (dispatch) => { // On appelle cette fonction comme on veux
  return {
    addArticle: (article) => { // On passe la fonction addArticle sous forme de props
      dispatch(addArticleActionCreator(article))
    },
    editArticle: (article) => { 
      dispatch(editArticleActionCreator(article))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(
      (state) => { // On donne au reducer le state de départ
        return {
          articles:  state.articles
        }
      }, 
      (dispatch) => { // On donne acces à l'élément enfant à au code d'action situé dans le reducer (Dans Article.js, la metode editArticle qu'on utilise permet d'éxécuter le code situé dans le case 'EDIT_ARTICLE' du reducer)
        return {
          addArticle: (article) => { // On passe la fonction addArticle sous forme de props
            dispatch(addArticleActionCreator(article))
          },
          editArticle: (article) => { 
            dispatch(editArticleActionCreator(article))
          }
        }
      }
    )
    (App);
