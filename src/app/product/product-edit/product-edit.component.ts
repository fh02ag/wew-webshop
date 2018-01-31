import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  public filter: FormGroup;
  public editSuccess: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.filter = fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(3)]]
    });
  }


  editProduct() {
    this.productService.editProduct(this.product).subscribe(
      product => {
        this.editSuccess = true;
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params['productId']).subscribe(
        product => {
          this.product = product;
        }
      );
    });
  }
}
