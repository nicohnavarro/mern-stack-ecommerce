import { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../../api/productApi";
import { productsReducer, initialState } from "../reducers/productsReducer";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: "LOAD_PRODUCTS" });
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...initialState }}>
      {children}
    </ProductContext.Provider>
  );
};
