import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistraComponent } from './registra/registra.component';

const routes: Routes = [
  {
    path: '',
    component: RegistraComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistraComponent,
  },
  {
    path: 'cart',
    component: CartShoppingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

