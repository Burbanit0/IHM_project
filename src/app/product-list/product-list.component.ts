import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../_services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
      this.productService.findAll().subscribe(data => {
          this.products = data;
      });
  }

}
