import { Routes } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAdminComponent } from "./user-admin/user-admin.component";

export const USER_ROUTES: Routes = [
    {
        path: 'edit/:userId',
        component: UserEditComponent
    },
    {
        path: 'admin',
        component: UserAdminComponent
    }
]