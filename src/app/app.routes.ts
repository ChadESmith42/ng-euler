import { Routes } from '@angular/router';
import { EvenFibonacciNumbersComponent } from './even-fibonacci-numbers/even-fibonacci-numbers.component';
import { MultiplesOfThreeOrFiveComponent } from './multiples-of-three-or-five/multiples-of-three-or-five.component';

export const routes: Routes = [
  { path: '1', component: MultiplesOfThreeOrFiveComponent },
  { path: '2', component: EvenFibonacciNumbersComponent }
];
