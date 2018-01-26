import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CART_ROUTES } from './cart.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CART_ROUTES)
  ],
  declarations: [CartComponent]
})
export class CartModule { }