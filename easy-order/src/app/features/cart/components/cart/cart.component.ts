import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'eo-cart',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
