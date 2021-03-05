import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {Link,useHistory} from 'react-router-dom'
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { db } from './firebase';
import firebase from 'firebase'
function Payment() {
    const [{basket,user}]=useStateValue();
    const history=useHistory()
    function doPayment(){
        db.collection('users').doc(user?.uid).collection('orders').add({
            basket:basket,
            amount:getBasketTotal(basket),
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }).then((url)=>{
            history.push('/orders')
        })
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout {
                    <Link to="/checkout">({basket.length} items)</Link>
                    }
                </h1>
            <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
             <p>{user?.email}</p>
             <p>8/A 202,Eden Rose,Near Cinemax</p>
             <p>Mira-Road(E), Mumbai</p>
            </div>
            </div>
            <div className="payment_section">
            <div className="payment_title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                ))}
                
            </div>
            </div>
            <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>

            </div>
            <div className="payment_details">
            <CurrencyFormat 
            renderText={(value)=>(
                <>
                <p>
                    Order Total ({basket.length} items):<strong>{`${value}`}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>Cash On Delivery
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs.'}
            />
            <button onClick={doPayment}>Buy Now</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Payment

