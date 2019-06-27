import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home',
   component: HomeComponent,
   children: [
     {path: 'produit',
     component: ProduitComponent,
     outlet:'contentOutlet'
   },
     {path: 'dashboard',
      component: DashboardComponent,
      outlet:'contentOutlet'
    },
   ]
 },
  {path: 'produit', component: ProduitComponent},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: '',
    redirectTo: '/home',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
