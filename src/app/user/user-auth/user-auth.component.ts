import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "user-auth",
  templateUrl: "./user-auth.component.html",
  styleUrls: ["./user-auth.component.css"]
})
export class UserAuthComponent implements OnInit {
  public filter: FormGroup;
  public authSuccess: boolean = null;
  public user;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.filter = fb.group({
      email: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  registerUser() {
    const value = this.filter.value;
    this.userService.authenticateUser(value.email, value.password).subscribe(
      user => {
        if (user.email === "admin@admin.at") {
          this.router.navigate(["/admin"]);
        } else {
          this.user = user;
          this.authSuccess = true;
          this.filter.reset();
        }
      },
      err => {
        this.authSuccess = false;
      }
    );
  }

  ngOnInit() {}
}
