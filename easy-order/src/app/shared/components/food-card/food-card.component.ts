import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';



@Component({
  selector: 'food-card-component',
  standalone: true,
  imports: [
    Button,
    CardModule,
  ],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
    images = [
      'assets/img1.jpg',
      'assets/img2.jpg',
      'assets/img3.jpg'
    ];

    currentIndex = 0;

    next() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    }
  }

