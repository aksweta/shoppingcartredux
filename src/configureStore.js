import { createStore } from "redux";
import data from "./products";

const storeData = data;

const cart = {
  shoppingCart: [],
};

function reducer(state, action) {
  let newState = Object.assign({}, state || cart);
  if (action.type === "ADD_ITEM") {
    newState.shoppingCart.push(action.item);
    return newState;
  }

  if (action.type === "REMOVE_ITEM") {
    const remove = newState.shoppingCart.filter((item) => {
      return item.id !== action.item.id;
    });
    newState.shoppingCart = [];
    newState.shoppingCart.push(...remove);
    return newState;
  }

  return newState;
}

var store = createStore(reducer);

export default store;
