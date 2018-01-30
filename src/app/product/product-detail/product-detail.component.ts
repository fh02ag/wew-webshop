import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number; 
  name: string;
  description: string;
  price: number;

  constructor() { }

  ngOnInit() {
  }

}
