export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';
export const CART_INCREASE_QUANTITY = 'CART_INCREASE_QUANTITY';
export const CART_DECREASE_QUANTITY = 'CART_DECREASE_QUANTITY';

// import {Injectable} from '@angular/core';  
// import {Action} from '@ngrx/store';
// import { Product } from '../entities/product';
// import { CartEntry } from '../entities/cart-entry';

// @Injectable()
// export class CartActions {

//     static CART_ADD = 'CART_ADD';
//     addToCart(product: Product): Action {
//         return {
//             type: CartActions.CART_ADD,
//             payload: product
//         }
//     }

//     static CART_REMOVE = 'CART_REMOVE';
//     removeFromCart(cartEntry: CartEntry): Action {
//         return {
//             type: CartActions.CART_REMOVE,
//             payload: cartEntry
//         }
//     }

//     static CART_INCREASE_QUANTITY = 'CART_INCREASE_QUANTITY';
//     increaseQuantity(cartEntry: CartEntry): Action {
//         return {
//             type: CartActions.CART_INCREASE_QUANTITY,
//             payload: cartEntry
//         }
//     }

//     static CART_DECREASE_QUANTITY = 'CART_DECREASE_QUANTITY';
//     decreaseQuantitiy(cartEntry: CartEntry): Action {
//         return {
//             type: CartActions.CART_DECREASE_QUANTITY,
//             payload: cartEntry
//         }
//     }
// }