import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { BASE_URL } from './app.token';
import { cartReducer } from './reducer/cart.reducer';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserAuthComponent } from './user/user-auth/user-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserAuthComponent
],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{ provide: BASE_URL, useValue: 'http://localhost:3000/api/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
