import { Routes } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const USER_ROUTES: Routes = [
    {
        path: 'edit',
        component: UserEditComponent
    }
]