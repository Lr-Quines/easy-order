import { Component, inject, input } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Item } from '../../../core/models/item.model';
import { CartService } from '../../../features/cart/service/cart.service';
import { CartItem } from '../../../core/models/cart-item.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'food-card-component',
  standalone: true,
  imports: [
    Button,
    CardModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  protected quantity: number = 1;
  public item = input.required<Item>();

  private readonly _CART_SERVICE = inject(CartService);
  private readonly _MESSAGE_SERVICE = inject(MessageService);

  protected visible: boolean = false;

  protected showDialog(): void {
    this.visible = true;
  }

  protected create(): void {
    const cartItem: CartItem = {
      itemId: this.item().id!,
      quantity: this.quantity
    }

    this._CART_SERVICE.create(cartItem).subscribe({
      next: () => {
        this._MESSAGE_SERVICE.add({ severity: 'success', detail: 'Item adicionado ao carrinho' });
      }
    })
  }
}

