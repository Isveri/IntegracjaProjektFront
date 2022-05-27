import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {RegisterComponent} from "../../components/register/register.component";
import {LoginComponent} from "../../components/login/login.component";
import {AuthGuard} from "../../services/AuthGuard";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

];
