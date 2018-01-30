import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Cart } from "./entities/cart";
import { AppState } from "./state/app-state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  cart$: Observable<Cart>;
  public searchTerm;

  constructor(private router: Router, private store: Store<AppState>) {
    this.cart$ = this.store.select('cart');
  }

  doProductSearch() {
    this.router.navigate(["/search"], {
      queryParams: { searchTerm: this.searchTerm }
    });
  }
}
