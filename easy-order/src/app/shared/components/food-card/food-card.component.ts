import { Component, Input } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'food-card-component',
  standalone: true,
  imports: [
    Button,
    CardModule,
    DialogModule,
    InputTextModule
  ],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  @Input() item: any;

  protected visible: boolean = false;

  protected showDialog(): void {
    this.visible = true;
  }
}

