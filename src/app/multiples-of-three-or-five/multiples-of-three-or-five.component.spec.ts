import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesOfThreeOrFiveComponent } from './multiples-of-three-or-five.component';

describe('MultiplesOfThreeOrFiveComponent', () => {
  let component: MultiplesOfThreeOrFiveComponent;
  let fixture: ComponentFixture<MultiplesOfThreeOrFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultiplesOfThreeOrFiveComponent]
    });
    fixture = TestBed.createComponent(MultiplesOfThreeOrFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
