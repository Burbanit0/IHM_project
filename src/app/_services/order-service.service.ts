import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class OrderService {

  ordersUrl = "assets/orders.json";

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }
}
