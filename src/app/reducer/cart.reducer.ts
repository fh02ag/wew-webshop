import { Action } from "@ngrx/store";
import {
  CART_ADD,
  CART_REMOVE,
  CART_INCREASE_QUANTITY,
  CART_DECREASE_QUANTITY
} from "../actions/cart.actions";
import { CartEntry } from "../entities/cart-entry";
import { Cart } from "../entities/cart";
import { CustomAction } from "../actions/custom.actions";
import { AppState } from "../state/app-state";

export function cartReducer(
  state: Cart = {cartEntries: [], totalPrice: 0},
  action: CustomAction
) {
  switch (action.type) {
    case CART_ADD:
      addToCart(state, action.payload);
      return state;
    case CART_REMOVE:
      removeFromCart(state, action.payload);
      return state;
    case CART_INCREASE_QUANTITY:
      increaseQuantity(state, action.payload);
      return state;
    case CART_DECREASE_QUANTITY:
      decreaseQuantity(state, action.payload);
      return state;
    default:
      return state;
  }
}

function addToCart(cart, product) {
  for (let cartEntry of cart.cartEntries) {
    if (cartEntry.product.id == product.id) {
      cartEntry.quantity++;
      calculateTotalPrice(cart);
      return;
    }
  }
  let newEntry = new CartEntry();
  newEntry.product = product;
  cart.cartEntries.push(newEntry);
  calculateTotalPrice(cart);
}

function removeFromCart(cart, cartEntry) {
  let removeIndex = cart.cartEntries.indexOf(cartEntry);
  if (removeIndex >= 0) {
    cart.cartEntries.splice(removeIndex, 1);
  }
  calculateTotalPrice(cart);
}

function increaseQuantity(cart, cartEntry) {
  cartEntry.quantity++;
  calculateTotalPrice(cart);
}

function decreaseQuantity(cart, cartEntry) {
  cartEntry.quantity--;
  if (cartEntry.quantity == 0) {
    removeFromCart(cart, cartEntry);
    return;
  }
  calculateTotalPrice(cart);
}

function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let cartEntry of cart.cartEntries) {
    totalPrice += cartEntry.product.price * cartEntry.quantity;
  }
  cart.totalPrice = totalPrice;
}
