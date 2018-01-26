import { Routes } from "@angular/router";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const PRODUCT_ROUTES: Routes = [
    {
        path: 'search',
        component: ProductSearchComponent
    },
    {
      path: 'detail/:id',
      component: ProductDetailComponent
    }
]