import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/data-service.service';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css'],
})
export class AppProductComponent implements OnInit {
  @Input('product') product: null | IProduct = null;
  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
