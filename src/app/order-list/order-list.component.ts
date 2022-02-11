import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Product } from '../model/product';
import { User } from '../model/user';
import { OrderService } from '../_services/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] | undefined;
  currentOrder: Order = {};
  currentUser: User = {};
  currentIndex = -1;
  currentProducts: Product[] | undefined;

  constructor(
    private orderService: OrderService,
    ) {
  }

  ngOnInit() {
      this.orderService.findAll().subscribe(data => {
          this.orders = data;
      });
  }

  setActiveOrder(order: Order, index:number): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }

}
