import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BASE_URL } from "../app.token";
import { User } from "../entities/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class UserService {
  user: User = null;

  constructor(
    @Inject(BASE_URL) private url: string,
    private http: HttpClient
  ) {}

  getUsers() {
    const url = this.url + "users";
    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.get<User[]>(url, { headers });
  }

  getUser(userId) {
    const url = this.url + "users/" + userId;
    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.get<User>(url, { headers });
  }

  removeUser(user: User) {
    const url = this.url + "users/" + user.id;
    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.delete(url, { headers });
  }

  editUser(user: User) {
    const url = this.url + "users/" + user.id;
    const body = {
      email: user.email,
      password: user.password,
      username: user.username
    };

    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.patch<User>(url, body, { headers });
  }

  registerUser(email: string, password: string, username: string) {
    const url = this.url + "users";
    const body = {
      email: email,
      password: password,
      username: username
    };

    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.post<User>(url, body, { headers });
  }

  authenticateUser(email: string, password: string) {
    const url = this.url + "users/authenticate";
    const body = {
      email: email,
      password: password
    };

    let headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json");

    return this.http.post<User>(url, body, { headers });
  }
}
