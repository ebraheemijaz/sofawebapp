import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService, FAQ } from '../../data-service.service';

@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.css'],
})
export class AppHomePageComponent implements OnInit, OnDestroy {
  sliderImgaes: string[] = [];
  selectedImageIndex = 0;
  FAQList: FAQ[] = [];
  intervelId: any = '';

  constructor(private DataService: DataServiceService) {}
  ngOnDestroy(): void {
    clearTimeout(this.intervelId);
  }

  ngOnInit(): void {
    this.sliderImgaes = this.DataService.getSliderImages();
    this.FAQList = this.DataService.getFAQList();
    this.intervelId = setInterval(() => {
      this.next();
    }, 2000);
  }

  next() {
    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % this.sliderImgaes.length;
  }

  previous() {
    this.selectedImageIndex =
      this.selectedImageIndex - 1 < 0
        ? this.sliderImgaes.length - 1
        : this.selectedImageIndex - 1;
  }
}
