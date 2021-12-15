import { Component, OnInit } from '@angular/core';
import { DataServiceService, IProducts } from 'src/app/data-service.service';

@Component({
  selector: 'app-app-product-page',
  templateUrl: './app-product-page.component.html',
  styleUrls: ['./app-product-page.component.css'],
})
export class AppProductPageComponent implements OnInit {
  allProucts: IProducts = {};
  allProuctsIds: string[] = [];
  constructor(private DataService: DataServiceService) {}

  ngOnInit(): void {
    this.allProucts = this.DataService.getProducts();
    this.allProuctsIds = Object.keys(this.allProucts);
  }
}
