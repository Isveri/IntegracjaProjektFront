import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {AuthGuard} from "./services/AuthGuard";

const routes: Routes =[
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import ('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]

  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]

  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
  ];
//   {
//     path: '',
//     component: AdminLayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard',
//         loadChildren: () => import ('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
//       },
//     ]
//   },
//   {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: 'login',
//         loadChildren: () => import ('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
