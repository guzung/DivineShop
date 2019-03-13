import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(Constants.API_HOLY_REPOSITORY + '/products/get-all', {});
  }


  login(user: string, pass: string): Observable<any> {
    const method = '/login';

    return this.http.post<Observable<boolean>>(Constants.API_HOLY_REPOSITORY + method, {
      username: user,
      password: pass
    });
  }
}
