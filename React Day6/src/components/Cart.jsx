import React from "react";  
import Product from "./Product";

function Cart({items}) {
    return (
        <div>
            <h1>Cart</h1>
            {items.map(item => (
                <Product key={item.id} {...item} />
            ))}
        </div>
    );
}

export default Cart;