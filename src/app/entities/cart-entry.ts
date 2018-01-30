import { Product } from "./product";

export class CartEntry {
    product: Product; 
    quantity: number = 1;

    constructor() {}
}