import { Injectable } from '@angular/core';
import dummydata from '../assets/data.json';

export interface FAQ {
  question: string;
  answer: string;
}

export interface IProduct {
  id: string;
  type: string;
  trending_or_popular: string;
  Price: string;
  title: string;
  description: string;
  imageLink: string;
}

export interface IProducts {
  [key: string]: IProduct;
}

export interface Idata {
  sliderImages: string[];
  FAQ: FAQ[];
  products: IProducts;
}

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  data: Idata = dummydata;

  constructor() {
    console.log(this.data);
  }

  getSliderImages() {
    return this.data.sliderImages;
  }

  getFAQList() {
    return this.data.FAQ;
  }

  getProducts(): IProducts {
    return this.data.products;
  }
}
