import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({id,title,image,price,rating,hideButton}) {
    const [{basket},dispatch]=useStateValue();

    const removeItem=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={image}></img>

            <div className="checkoutPrdouct_info">
            <p className="checkoutProduct_title">{title}</p>
           <p className="checkoutProduct_price">
               <small>Rs.</small>
               <strong>{price}</strong>
           </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    // Using Emoji-->Windows+.
                    ))
                }
                </div>
                {!hideButton && (
                <button onClick={removeItem}>Remove from basket</button>
                )}
                </div>
            
        </div>
    )
}

export default CheckoutProduct
