import React, { useState } from "react";
import { useProducts } from "../../context/providers/ProductsContext";
import Spinner from "../../components/ui/Spinner";

const ProductForm = () => {
  const { addNewProduct, isLoading } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewProduct(product);
  };

  return (
    <div className="row h-100">
      <div className="col-md-6 offset-md-3 my-auto">
        <form className="card card-body" onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Save Product</h1>
              <button
                className="btn btn-primary"
                disabled={!product.name || isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <span>Save</span>
                )}
              </button>
            </div>
            <div className="col-md-8">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control mb-2"
                name="name"
                onChange={handleChange}
                autoFocus
              />

              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                className="form-control mb-2"
                value={product.price}
                name="price"
                onChange={handleChange}
              />

              <label htmlFor="quantity">Quantity:</label>
              <input
                type="text"
                className="form-control"
                name="quantity"
                onChange={handleChange}
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows="2"
                className="form-control"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-md-4 my-auto ">
              <img src="/assets/noimage.png" alt="" className="img-fluid" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
