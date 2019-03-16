import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DivineHomeComponent} from './divine-home/divine-home.component';
import {AuthGuard} from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DivineHomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
