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
    return this.productService.getProducts(this.searchTerm);
  }

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
  }
}
