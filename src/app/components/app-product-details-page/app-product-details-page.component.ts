import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DataServiceService,
  IProduct,
  IProducts,
} from 'src/app/data-service.service';

@Component({
  selector: 'app-app-product-details-page',
  templateUrl: './app-product-details-page.component.html',
  styleUrls: ['./app-product-details-page.component.css'],
})
export class AppProductDetailsPageComponent implements OnInit {
  product: IProduct | undefined = undefined;
  images: string[] = [];
  selectedImage: string = '';

  constructor(
    private DataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getProduct(params['id']));
  }

  private getProduct(id: string) {
    this.product = this.DataService.getProduct(id);
    this.images = [this.product.imageLink, ...this.product.images];
    this.selectedImage = this.images[0];
  }

  public selectImage(index: number) {
    this.selectedImage = this.images[index];
  }
}
