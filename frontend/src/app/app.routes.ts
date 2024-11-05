import { Routes } from '@angular/router';
import { RegisterComponent } from './cliente/register/register.component';
import { RegisterVendedorComponent } from './vendedor/register-vendedor/register-vendedor.component';
import { LoginComponent } from './vendedor/login/login.component';
import { LogoutComponent } from './vendedor/logout/logout.component';
import { VendedorComponent } from './vendedor/vendedor/vendedor.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'signup'},
    {path: 'signup', component: RegisterComponent},
    {path: 'signup/vendedor', component: RegisterVendedorComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'vendedor', component: VendedorComponent, canActivate:[authGuard]}
];
