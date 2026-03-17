import React from "react";

function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>

      <button onClick={() => props.addToCart(props.id)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;