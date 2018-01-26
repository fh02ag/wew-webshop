import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PRODUCT_ROUTES } from './product.routing';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  declarations: [ProductComponent,
    ProductSearchComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }