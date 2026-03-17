// import React, { useState } from "react";
// // import Counter from "./components/Counter";
// import Product from "./components/Product";
// import Cart from "./components/Cart";

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Headphones" },
//     { id: 4, name: "Keyboard" },
//     { id: 5, name: "Mouse" }
//   ];

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div>
//       <h1>Lifting State Up Demo</h1>

//       <h2>Products</h2>

//       {products.map((product) => (
//         <Product
//           key={product.id}
//           id={product.id}
//           name={product.name}
//           addToCart={() => addToCart(product)}
//         />
//       ))}

//       <Cart items={cartItems} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import ThemeContextProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeContextProvider>
      <NavBar />
    </ThemeContextProvider>
  );
}

export default App;