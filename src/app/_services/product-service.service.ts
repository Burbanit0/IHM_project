import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ProductService {

  productsUrl= "assets/products.json";

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
