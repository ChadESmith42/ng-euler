import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'euler-multiples-of-three-or-five',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './multiples-of-three-or-five.component.html',
  styleUrls: ['./multiples-of-three-or-five.component.scss']
})
export class MultiplesOfThreeOrFiveComponent implements OnInit {
  description: string[] = [
    `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.`,
    `Find the sum of all the multiples of 3 or 5 below 1,000.`
  ];
  firstThousand: number[] = [...Array(1000).keys()];
  total: number = 0;
  multiples: number[] = [];

  ngOnInit(): void {
    this.multiples = this.findMultiplesOf3Or5(this.firstThousand).filter(n => n !== 0);
    this.findTotal(this.multiples);
  }

  findMultiplesOf3Or5(numbers: number[]): number[] {
    const multiples: number[] = [];
    numbers.map(n => {
      n !== 0 && (n % 3 === 0 || n % 5 === 0) ? multiples.push(n) : null;
    });
    return multiples;
  }

  findTotal(numbers: number[]): number {
    numbers.map(n => {
      this.total += n;
    });
    return this.total;
  }
}
