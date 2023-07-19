import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [], // {id , title , desc , price , img }
  cart: [], // {id , title , desc , price , img ,qty}
  currentItem: null,
};

const ShopReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionTypes.ADD_TO_CART:
      //Get item data from the product array
      const item = state.products.find(
        (prod) => prod._id === action.payload.id
      );
      // Check if the item is in cart  already

      const inCart = state.cart.find((item) =>
        item._id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export  const setItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS_ID:
      return {
        ...state,
        id: action.payload,
      };
      default :
      return state
  }
};

// export  const setAddressReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_ADDRESS_ID:
//       return {
//         ...state,
//         id: action.payload,
//       };
//       default :
//       return state
//   }
// };



export default  ShopReducers;
