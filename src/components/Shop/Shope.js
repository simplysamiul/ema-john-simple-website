import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shope = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className = "shope-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product = {pd}></Product>)
                }
                
                
            </div>
            <div className="cart-container">
                <h2>This is my cart</h2>
            </div>
            
            
        </div>
    );
};

export default Shope;