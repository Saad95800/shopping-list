import React, {useState, useEffect} from 'react';
import Article from './Article';

export default function ItemList(props){

    console.log(props.articles);

    // useEffect 
    return (

        <div id="item-list">
        <p>Ma liste de courses</p>
        {console.log('rechargéééééé ItemList')}
        {console.log(props.articles)}
            {
                props.articles?.map((article, i)=> <Article key={i}  editArticle={props.editArticle} data={article} />)
            }
        </div>
    )

}