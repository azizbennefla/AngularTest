import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductComponent } from './showproduct.component';

describe('ShowproductComponent', () => {
  let component: ShowProductComponent;
  let fixture: ComponentFixture<ShowProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
