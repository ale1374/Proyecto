import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash-screen', pathMatch: 'full' },
  { path: 'splash-screen', loadComponent: () => import('./splash-screen/splash-screen.component').then(c => c.SplashScreenComponent) },
  { path: 'register-login', loadComponent: () => import('./register-login/register-login.component').then(c => c.RegisterLoginComponent) },
  { path: 'main-menu', loadComponent: () => import('./main-menu/main-menu.component').then(c => c.MainMenuComponent) },
  { path: 'order-config', loadComponent: () => import('./order-config/order-config.component').then(c => c.OrderConfigComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent) },
  { path: 'order-status', loadComponent: () => import('./order-status/order-status.component').then(c => c.OrderStatusComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}