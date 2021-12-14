import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service'

interface FAQ {
  question:string,
  answer:string
}
@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.css']
})
export class AppHomePageComponent implements OnInit {

  sliderImgaes = []
  selectedImageIndex = 0
  FAQList:FAQ[] = []
  constructor(private DataService:DataServiceService) { }

  ngOnInit(): void {
    this.sliderImgaes = this.DataService.getSliderImages()
    this.FAQList = this.DataService.getFAQList()
  }

  next(){
    this.selectedImageIndex = ( this.selectedImageIndex + 1 ) % this.sliderImgaes.length
    console.log(this.selectedImageIndex)
  }

  previous(){
    this.selectedImageIndex = this.selectedImageIndex - 1 < 0 ? this.sliderImgaes.length - 1 : this.selectedImageIndex - 1
    console.log(this.selectedImageIndex)
  }

}
