import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductDetailsPageComponent } from './components/app-product-details-page/app-product-details-page.component';
import { AppHomePageComponent } from './pages/app-home-page/app-home-page.component';
import { AppProductPageComponent } from './pages/app-product-page/app-product-page.component';

const routes: Routes = [
  { path: '', component: AppHomePageComponent },
  { path: 'product', component: AppProductPageComponent },
  { path: 'details/:id', component: AppProductDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
