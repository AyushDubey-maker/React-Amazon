import React, { useEffect, useState } from 'react'
import {useStateValue} from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { db } from './firebase'
function Checkout() {
    const [{basket,user}]=useStateValue();
    const [banner,setBanner]=useState('')
    //Getting Image through Firebase 
    useEffect(()=>{
     db.collection('banner_img').doc('2bAuY8S9WQqtWOrGxyZV').get().then((result)=>{
         setBanner(result.data())
     })
    },[])
    return (
    // Providing this type of className is BEM representation
       
        <div className="checkout">
      

        
            <div className="checkout_left">
            <img className="checkout_ad" src={banner.img}>

            </img>
           {basket?.length===0 ?(
               <div>
                   <h2>Your shopping basket is Empty...</h2>
                   <p>Currently you have nothing in your basket .To buy anything click to "Add To Basket" next to item.</p>
                   </div>

           ):(
               <div> 
                   <h3> Hello, {user?.email}</h3>
                   <h2 className="checkout_title">Your shopping basket</h2>
                   {basket?.map(item=>(
                       <CheckoutProduct 
                       id={item.id}
                       title={item.title}
                       price={item.price}
                       rating={item.rating}
                       image={item.image}
                       />
                   ))}
                   </div>
           )}
           </div>
    
           {basket.length>0 &&(
               <div className="checkout_right">
               <Subtotal/>
               </div>
               )}
        </div>
         
    )
    }



export default Checkout
