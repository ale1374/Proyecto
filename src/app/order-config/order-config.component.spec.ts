import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderConfigComponent } from './order-config.component';

describe('OrderConfigComponent', () => {
  let component: OrderConfigComponent;
  let fixture: ComponentFixture<OrderConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OrderConfigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
