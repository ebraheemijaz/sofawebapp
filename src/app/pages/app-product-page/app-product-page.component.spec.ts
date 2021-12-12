import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductPageComponent } from './app-product-page.component';

describe('AppProductPageComponent', () => {
  let component: AppProductPageComponent;
  let fixture: ComponentFixture<AppProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
