import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductsService {
  public API = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.API + '/products/get-all', {});
  }
}
