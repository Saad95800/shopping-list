import React from 'react';
import Article from './Article';

function ItemList({articles, deleteArticle, setQuantity, setName}){

    return (
        <div>
            <h4>Liste des articles</h4>
            {
                articles.map((article, index) => {
                    return <Article key={index} article={article} deleteArticle={deleteArticle} setQuantity={setQuantity} setName={setName}/>
                })
            }
        </div>
    )


}

export default ItemList;