import React, {useState, useEffect} from 'react';

export default function Article(props){

    const [isInEditMode, setIsInEditMode] = useState(false);

    const toggleEditMode = ()=>{
        setIsInEditMode(!isInEditMode)
    }

    const handleQuantityEdit = (event, article)=>{
        article.quantity = event.target.value
        props.editArticle(article)
    }

    const handleNameEdit = (event, article)=>{
        article.name = event.target.value
        props.editArticle(article)
    }

    console.log(props.data)
    return (
        <div id="item-list">
            {
                <div>
                    <button className="btn btn-warning btn-xs edit"
                            onClick={()=>toggleEditMode()}>Edit</button>
                    {isInEditMode ? 
                        <span>
                            <input type="number" 
                                onChange={(event)=> handleQuantityEdit(event, props.data)}
                                value={props.data.quantity}/>
                            <input type="name" 
                                onChange={(event)=> handleNameEdit(event, props.data)}
                                value={props.data.name}/>
                        </span>
                     : <span>{props.data.quantity} {props.data.name}</span>}
                    
                </div>
            }
        </div>
    )

}