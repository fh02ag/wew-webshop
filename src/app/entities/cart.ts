import { Product } from "./product";
import { CartEntry } from "./cart-entry";

export class Cart {
    cartEntries: CartEntry[] = [];
    totalPrice: number;

    constructor() {}
}