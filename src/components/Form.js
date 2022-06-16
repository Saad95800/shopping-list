import React, {useState, useEffect} from 'react';

export default function Form({formTitle, addArticle}){

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        console.log('validé')
        if(name != '' && quantity > 0){
            let article = {};
            article.name = name;
            article.id = Date.now();
            article.quantity = quantity;
            addArticle(article)
            setName('')
            setQuantity(0)
        }
    }

    return(
        <div>
            <p>{formTitle}</p>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="row">
                    <div className="col-sm-1">      
                        <input type="number" value={quantity} className="form-control my-2" placeholder="Quantité" onChange={(e)=>{
                            setQuantity(e.target.value)
                        }} />
                    </div>
                    <div className="col-sm-5">
                        <input type="text" value={name} className="form-control my-2" placeholder="Article" onChange={(e)=>{
                            setName(e.target.value)
                        }} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    )

}