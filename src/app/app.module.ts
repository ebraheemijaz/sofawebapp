import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppHomePageComponent } from './pages/app-home-page/app-home-page.component';
import { AppProductPageComponent } from './pages/app-product-page/app-product-page.component';
import { AppProductComponent } from './components/app-product/app-product.component';
import { AppProductDetailsPageComponent } from './components/app-product-details-page/app-product-details-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomePageComponent,
    AppProductPageComponent,
    AppProductComponent,
    AppProductDetailsPageComponent,
    ContactUsPageComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
