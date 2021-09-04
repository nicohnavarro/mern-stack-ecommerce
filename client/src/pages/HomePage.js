import React, { useContext } from "react";
import { ProductContext } from "../context/providers/ProductsContext";
const HomePage = () => {
  const { products, isLoading } = useContext(ProductContext);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4">
        <div className="card card-body">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
