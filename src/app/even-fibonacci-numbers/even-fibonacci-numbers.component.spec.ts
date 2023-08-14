import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenFibonacciNumbersComponent } from './even-fibonacci-numbers.component';

describe('EvenFibonacciNumbersComponent', () => {
  let component: EvenFibonacciNumbersComponent;
  let fixture: ComponentFixture<EvenFibonacciNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvenFibonacciNumbersComponent]
    });
    fixture = TestBed.createComponent(EvenFibonacciNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
