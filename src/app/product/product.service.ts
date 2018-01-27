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
    ) { console.log('construc')}

    getProducts(searchTerm: string) {
        const url = this.url + 'products';
        let params = new HttpParams()
            .set('searchTerm', searchTerm);

            console.log(searchTerm);
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
            //.set('Authorization', this.oauthService.authorizationHeader());
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
}