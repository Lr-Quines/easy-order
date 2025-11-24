import { Component, Input } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';





@Component({
  selector: 'food-card-component',
  standalone: true,
  imports: [
    Button,
    CardModule,
    DialogModule
  ],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  @Input() item: any;
}

