import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable()
export class ProductService {

    constructor() { }

    getProducts(searchTerm: string): Product[] {
        return null;
    }
}