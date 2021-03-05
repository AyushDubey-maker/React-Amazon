import React from 'react'
import './Order.css'
import moment from 'moment'

import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
function Order({order}) {
    const [{basket,user}]=useStateValue();

    //Function to delete the order history.
  function delete_order(){
      db.collection('users').doc(user?.uid).collection('orders').doc(order.id).delete()
  }
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.timestamp).format("DD/MM/2021")}</p>
            <p className="order_id"><strong>Order ID:</strong> <small>{order.id}</small></p>
            <button className="order_delete_button" onClick={delete_order}>Delete Order History</button>
            {order.data.basket?.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                hideButton
                />
            ))}
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <h3 className="order_total">Order Total: {value}</h3>
                </>
            )}
            decimalScale={2}
            value={order.data.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs.'}
            />
        </div>
    )
}

export default Order
