import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../entities/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  public filter: FormGroup;
  public editSuccess: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) {
    this.filter = fb.group({
      email: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      username: ["", [Validators.required, Validators.minLength(3)]]
    });
  }


  editUser() {
    this.userService.editUser(this.user).subscribe(
      user => {
        this.editSuccess = true;
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['userId']).subscribe(
        user => {
          this.user = user;
        }
      );
    });
  }

}
