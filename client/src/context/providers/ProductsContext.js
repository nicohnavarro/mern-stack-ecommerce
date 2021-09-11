import { createContext, useContext, useEffect, useReducer } from "react";
import { getProducts, saveProducts } from "../../api/productApi";
import { productsReducer, initialState } from "../reducers/productsReducer";
import { productActions } from "../actions/productsActions";

export const ProductContext = createContext(initialState);

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: productActions.LOAD_PRODUCTS });
    try {
      const res = await getProducts();
      if (res.data)
        dispatch({
          type: productActions.LOAD_PRODUCTS_SUCCESS,
          payload: res.data,
        });
    } catch (err) {
      dispatch({
        type: productActions.LOAD_PRODUCTS_ERROR,
        payload: err.message,
      });
    }
  };

  const addNewProduct = async(newProduct) => {
    dispatch({ type: productActions.LOAD_SAVE_PRODUCTS });
    try {
      const res = await saveProducts(newProduct);
      if (res.data) {
        dispatch({
          type: productActions.LOAD_SAVE_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: productActions.LOAD_SAVE_PRODUCTS_ERROR,
        payload: err.message,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state,loadProducts,addNewProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
