import React, { useContext } from "react";
import Hero from "../components/ui/Hero";
import { ProductContext } from "../context/providers/ProductsContext";

const HomePage = () => {
  const { products, isLoading, addNewProduct } = useContext(ProductContext);
  console.log(addNewProduct);
  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center h-100 mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  return (
    <div className="row">
      <Hero />
      {products.map((product) => (
        <div className="col-md-4" key={product._id}>
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
