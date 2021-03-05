import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
import {Link,useHistory} from 'react-router-dom'
function Product({id,title,image,price,rating}) {
    const [{user},dispatch]=useStateValue();
    const history=useHistory()
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
           <p className="product_price">
               <small>Rs.</small>
               <strong>{price}</strong>
           </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    // Using Emoji-->Windows+.
                    ))
                }
            </div>
            </div>
            <img src={image}></img>
            {user?(

                <button onClick={addToBasket}>Add To Basket</button>
            ):(
                
             <button onClick={e=>history.push('/login')}>Add To Basket</button>
        
            )}
        </div>
    )
}

export default Product
