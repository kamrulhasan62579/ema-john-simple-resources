import React from 'react';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
   
    const {name, price, img, seller, stock, features, star} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="tools-container">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <div className="last-half">
                    <div>
                        <h4>${price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddCard(props.product)} className="btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="features-container">
                        <h4>Rating: {star}</h4>
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map( feature => <li>{feature.description} : <b>{feature.value}</b></li> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
           
        </div>
    );
};

export default Product;