import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BASE_URL } from '../app.token';
import { User } from '../entities/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class UserService {

    user: User = null;

    constructor( @Inject(BASE_URL) private url: string, private http: HttpClient) {
    }

    registerUser(email: string, password: string, username: string) {
        const url = this.url + 'users';
        const body = {
            email: email,
            password: password,
            username: username
        };

        let headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        this.http.post<User>(url, body, { headers }).subscribe(
            user => {
                this.user = user;
            },
            err => {
                console.error('Error register user.', err);
            }
        );
    }

}