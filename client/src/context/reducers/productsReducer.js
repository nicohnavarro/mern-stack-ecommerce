export const initialState = {
  products: [],
  currentProduct: {},
};

export const productsReducer = (state,actions) => {
  switch (actions.type) {
    case 'LOAD_PRODUCTS':
      return{
        ...state,
        products:[1,2,]
      }
      break;
  
    default:
      break;
  }
}