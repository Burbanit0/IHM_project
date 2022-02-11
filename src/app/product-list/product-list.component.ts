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
  currentProduct: Product = {};
  currentIndex = -1;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
      this.productService.findAll().subscribe(data => {
          this.products = data;
      });
  }

  setActiveProduct(product: Product, index:number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

}
