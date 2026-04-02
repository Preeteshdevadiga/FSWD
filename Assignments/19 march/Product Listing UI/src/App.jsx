import { useState } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter(
          (item) => item.category === category
        );

  return (
    <div>
      <h1>🛒 Product Store</h1>
      <Filter setCategory={setCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;