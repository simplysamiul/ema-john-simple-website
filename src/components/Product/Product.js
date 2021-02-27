import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => { 
    console.log(props.product)  
    const {img, name,seller,price,stock,} = props.product; 
    return (
        <div className = "product">
            <div >
                <img src={img} alt="opps!"/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p>by : {seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button className ="order-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
            </div>
        </div>
    );
};

export default Product;