import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getProducts(page: number, pageSize: number): Observable<any> {
    const params = {
      _page: page.toString(),
      _limit: pageSize.toString()
    };

    return this.http.get(this.apiUrl, { params });
  }
}
