import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', pathMatch: 'full', component: LoginComponent, canActivate: [NoAuthGuard]},
  {path: 'checkout', pathMatch: 'full', component: CheckoutComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
