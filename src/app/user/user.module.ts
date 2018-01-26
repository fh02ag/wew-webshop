import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [UserComponent,
    UserEditComponent
]
})
export class UserModule { }