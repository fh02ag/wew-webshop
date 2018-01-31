import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { RouterModule } from "@angular/router";
import { USER_ROUTES } from "./user.routing";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserService } from "./user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { UserAdminComponent } from './user-admin/user-admin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [UserComponent, UserEditComponent,
    UserAdminComponent
],
  providers: [UserService]
})
export class UserModule {}
