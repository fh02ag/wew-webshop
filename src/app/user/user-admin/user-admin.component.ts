import { Component, OnInit } from "@angular/core";
import { User } from "../../entities/user";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { ProductService } from "../../product/product.service";
import { Product } from "../../entities/product";

@Component({
  selector: "app-user-admin",
  templateUrl: "./user-admin.component.html",
  styleUrls: ["./user-admin.component.css"]
})
export class UserAdminComponent implements OnInit {
  public users: User[];
  public products: Product[];

  constructor(private userService: UserService, private router: Router, private productService: ProductService) {
    this.getUsers();
    this.getAllProducts();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      products => {
        console.log(products);
        this.products = products;
      }
    );
  }

  removeUser(user: User) {
    this.userService.removeUser(user).subscribe(users => {
      this.getUsers();
    });
  }

  editUser(userId: string) {
    this.router.navigate(['/edit', userId]);
  }

  removeProduct(product: Product) {
    this.productService.removeProduct(product).subscribe(products => {
      this.getAllProducts();
    });
  }

  editProduct(productId: string) {
    this.router.navigate(['/product/edit', productId]);
  }

  ngOnInit() { }
}
