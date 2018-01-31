import { Component, OnInit } from "@angular/core";
import { User } from "../../entities/user";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-admin",
  templateUrl: "./user-admin.component.html",
  styleUrls: ["./user-admin.component.css"]
})
export class UserAdminComponent implements OnInit {
  public users: User[];

  constructor(private userService: UserService, private router: Router) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  removeUser(user: User) {
    this.userService.removeUser(user).subscribe(users => {
      this.getUsers();
    });
  }

  editUser(userId: string) {
    this.router.navigate(['/edit', userId]);
  }

  ngOnInit() {}
}
