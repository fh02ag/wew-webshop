import { Product } from "./product";
import { CartEntry } from "./cart-entry";

export interface Cart {
    cartEntries: CartEntry[];
    totalPrice: number;
}