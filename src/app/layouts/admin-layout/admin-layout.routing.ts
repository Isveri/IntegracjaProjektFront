import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {RegisterComponent} from "../../components/register/register.component";
import {LoginComponent} from "../../components/login/login.component";
import {AuthGuard} from "../../services/AuthGuard";
import {RawDataComponent} from "../../components/raw-data/raw-data.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'raw-data', component: RawDataComponent,canActivate: [AuthGuard] },

];
