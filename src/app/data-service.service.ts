import { Injectable } from '@angular/core';
import data from  '../assets/data.json'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { 
    console.log(data)
  }

  getSliderImages() {
    return data.sliderImages
  }

  getFAQList() {
    return data.FAQ
  }
}
