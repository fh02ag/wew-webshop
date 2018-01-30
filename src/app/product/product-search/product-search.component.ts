import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../entities/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchTerm: string;

  get products(): Product[] {
    return this.productService.products;
  }

  constructor(private productService: ProductService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      this.productService.getProducts(this.searchTerm);
    });
  }
}
