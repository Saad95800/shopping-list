import React, {useState} from 'react';

export default function Article({article, deleteArticle, setQuantity, setName}){

    const [editMode, setEditMode] = useState(false);
    // const [name, setName] = useState(article.name);
    // const [quantity, setQuantity] = useState(article.quantity);

    let content = <div style={{display: "flex", alignItems: "center"}}>
                        
                        <p className="ms-5">{article.quantity} {article.name}</p>
                  </div>

            if(editMode){
                content = <div style={{display: "flex", alignItems: "center"}}>
                            <input type="number"  className="ms-2" onChange={(e)=>{setQuantity(e.target.value, article.id)}} value={article.quantity} />
                            <input type="text" onChange={(e)=>{setName(e.target.value, article.id)}} value={article.name} />
                          </div>
            }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <button className="btn btn-danger btn-sm" onClick={()=>{deleteArticle(article.id)}}>Delete</button>
            <button className="btn btn-warning btn-sm" onClick={()=>{setEditMode(!editMode)}}>Edit</button>
            {content}
        </div>
    )

}