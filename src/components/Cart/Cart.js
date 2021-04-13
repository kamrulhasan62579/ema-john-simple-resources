import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const prd = cart[i];
    //     total = total + prd.price;  
    // }
    let shipping = 0;
    if (total >35 ) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total < 15) {
        shipping = .99;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal =  (total +Number(tax)+ shipping).toFixed(2);
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision); 
    }

    return (
        <div className="cart">
            <h3 className="cart-middle">Order Summary</h3>
            <p className="cart-middle">Items Ordered: {cart.length}</p>
            <p><small>Product Total: {formatNumber(total)}</small></p>       
            <p><small>Shippng & Handling: {shipping}</small></p>       
            <p><small>Total Before Tax: {formatNumber(total)+ shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>       
            <h4>Grand Toatl Price: {grandTotal}</h4> 
            <button className="btn">Review Order Summary</button>      
        </div>
    );
};

export default Cart;