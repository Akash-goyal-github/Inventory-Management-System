import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByCategoryComponent } from './get-product-by-category.component';

describe('GetProductByCategoryComponent', () => {
  let component: GetProductByCategoryComponent;
  let fixture: ComponentFixture<GetProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
