import React, { useContext } from "react";
import { ProductContext } from "../context/providers/ProductsContext";
const HomePage = () => {
  const { products } = useContext(ProductContext);

  console.log(products);
  
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
