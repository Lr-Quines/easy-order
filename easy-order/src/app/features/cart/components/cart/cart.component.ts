import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PaymenteInfoComponent } from '../../../paymente-info/components/paymentInfo/paymente-info.component';

@Component({
  selector: 'eo-cart',
  standalone: true,
  imports: [
    PaymenteInfoComponent,
    CardModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
