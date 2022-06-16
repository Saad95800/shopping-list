import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const articlesReducer = (state = [], action) => {

  switch(action.type){
    case 'ADD_ARTICLE': // On éxécuter l'action d'ajouter un article
      action.payload.id = Date.now();
      const newState = [...state, action.payload];
      return newState;
    
    case 'EDIT_ARTICLE': 
        return state.map(article =>{
          if(article.id !== action.payload.id){
              return article;
          }
          return action.payload;
      });
      
      default:
        return state;
  }

}

const store  = createStore(
    combineReducers({articles: articlesReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
