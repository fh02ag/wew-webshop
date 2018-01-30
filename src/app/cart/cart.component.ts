import { Component, OnInit } from '@angular/core';
import { Cart } from '../entities/cart';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CART_REMOVE, CART_INCREASE_QUANTITY, CART_DECREASE_QUANTITY } from '../actions/cart.actions';
import { AppState } from '../state/app-state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart$: Observable<Cart>;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select('cart');
  }

  removeFromCart(cartEntry){
    this.store.dispatch({ type: CART_REMOVE, payload: cartEntry });
  }

  increaseQuantity(cartEntry) {
    this.store.dispatch({ type: CART_INCREASE_QUANTITY, payload: cartEntry });
  }

  decreaseQuantity(cartEntry) {
    this.store.dispatch({ type: CART_DECREASE_QUANTITY, payload: cartEntry });
  }

  ngOnInit() {
  }
}
