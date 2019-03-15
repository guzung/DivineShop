import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(Constants.API_HOLY_REPOSITORY + '/get-all-products', {});
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(Constants.API_HOLY_REPOSITORY + '/get-categories-with-products', {});
  }
}
