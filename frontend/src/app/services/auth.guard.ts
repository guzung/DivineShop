import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              public auth: AuthService) {
  }



  canActivate() {

    const token = sessionStorage.getItem('holyToken');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
