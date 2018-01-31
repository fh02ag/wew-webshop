import { Routes } from "@angular/router";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

export const PRODUCT_ROUTES: Routes = [
    {
        path: 'search',
        component: ProductSearchComponent
    },
    {
      path: 'detail/:id',
      component: ProductDetailComponent
    },
    {
        path: 'product/edit/:productId',
        component: ProductEditComponent
    },
]