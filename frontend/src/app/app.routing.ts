import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DivineHomeComponent} from './divine-home/divine-home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DivineHomeComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
