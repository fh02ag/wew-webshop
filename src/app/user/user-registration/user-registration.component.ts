import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public filter: FormGroup;
  public registrationSuccess: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.filter = fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  registerUser() {
    const value = this.filter.value;
    this.userService.registerUser(value.email, value.password, value.username);
    this.filter.reset();
    this.registrationSuccess = true;
  }

  ngOnInit() {
  }

}
