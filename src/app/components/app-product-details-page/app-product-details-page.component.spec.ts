import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductDetailsPageComponent } from './app-product-details-page.component';

describe('AppProductDetailsPageComponent', () => {
  let component: AppProductDetailsPageComponent;
  let fixture: ComponentFixture<AppProductDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
