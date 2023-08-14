import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplesOfThreeOrFiveComponent } from './multiples-of-three-or-five/multiples-of-three-or-five.component';

@Component({
  selector: 'euler-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MultiplesOfThreeOrFiveComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-euler';
}
