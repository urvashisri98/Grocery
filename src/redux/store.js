import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import ShopReducers, { setItemReducer } from "./reducers/ShopReducers";
import { userLoginReducer } from "./reducers/UserReducer";
// import { setAddressId } from "./actions/ProductActions";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const rootReducers = combineReducers({
  shop: ShopReducers,
  userLogin: userLoginReducer,
  itemId : setItemReducer,
  // addressId : setAddressId
});
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
