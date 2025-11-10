import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { HomeComponent } from './features/home/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'Página inicial' }
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
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
