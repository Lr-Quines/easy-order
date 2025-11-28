import { Routes } from '@angular/router';
import { ProductLayoutComponent } from './core/layouts/auth-layout/product-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { CreateAccountComponent } from './features/auth/components/create-account/create-account.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { RestaurantListComponent } from './features/restaurant/components/restaurant-list/restaurant-list.component';

export const routes: Routes = [
  {
    path: 'easy-order',
    component: ProductLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Página inicial' },
      { path: 'restaurant', component: RestaurantListComponent, title: 'Restaurantes' }
    ],
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent, title: 'Login' }
    ],
  },
  {
    path: 'create-account',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: CreateAccountComponent, title: 'Criar conta' }
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
