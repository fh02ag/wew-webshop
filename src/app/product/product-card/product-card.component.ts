import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../entities/product";
import { Cart } from "../../entities/cart";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { CART_ADD } from "../../actions/cart.actions";

interface AppState {
  cart: Cart;
}

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input() product;

  cart$: Observable<Cart>;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select("cart");
  }

  addToCart(product) {
    this.store.dispatch({ type: CART_ADD, payload: product });
  }

  ngOnInit() {}
}
