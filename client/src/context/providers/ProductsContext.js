import { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../../api/productApi";
import { productsReducer, initialState } from "../reducers/productsReducer";
import { productActions } from "../actions/productsActions";
export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: productActions.LOAD_PRODUCTS });
    const res = await getProducts();
    if (res.data)
      dispatch({
        type: productActions.LOAD_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    else
      dispatch({
        type: productActions.LOAD_PRODUCTS_ERROR,
        payload: "No products",
      });
  };

  useEffect(() => {
    loadProducts();
  }, []); 

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
