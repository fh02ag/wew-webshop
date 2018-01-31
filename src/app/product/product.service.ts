import { Inject, Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../app.token';
//import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class ProductService {

    public products: Product[] = [];

    constructor(
        @Inject(BASE_URL) private url: string,
        private http: HttpClient
        //private oauthService: OAuthService
    ) { }

    getAllProducts() {
        const url = this.url + 'products';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');

        return this.http.get<Product[]>(url, { headers });
    }

    getProducts(searchTerm: string) {
        const url = this.url + 'products';
        let params = new HttpParams()
            .set('searchTerm', searchTerm);

        console.log(searchTerm);
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        this.http
            .get<Product[]>(url, { params, headers }).subscribe(
            products => {
                this.products = products;
            },
            err => {
                console.error('Error loading flights', err);
            }
            );
    }

    removeProduct(product: Product) {
        const url = this.url + "products/" + product.id;
        let headers = new HttpHeaders()
            .set("Accept", "application/json")
            .set("Content-Type", "application/json");

        return this.http.delete(url, { headers });
    }

    getProduct(productId) {
        const url = this.url + "products/" + productId;
        let headers = new HttpHeaders()
            .set("Accept", "application/json")
            .set("Content-Type", "application/json");

        return this.http.get<Product>(url, { headers });
    }

    editProduct(product: Product) {
        const url = this.url + "products/" + product.id;
        const body = {
            name: product.name,
            price: product.price,
            description: product.description
        };

        let headers = new HttpHeaders()
            .set("Accept", "application/json")
            .set("Content-Type", "application/json");

        return this.http.patch<Product>(url, body, { headers });
    }
}