import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from '../../../core/models/item.model';
import { Observable } from 'rxjs';
import { CartItem } from '../../../core/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _HTTP_CLIENT = inject(HttpClient);

  private readonly _DEFAULT_URL = 'http://localhost:3000/cart';

  public create(cartItem: CartItem): Observable<Object> {
    return this._HTTP_CLIENT.post(this._DEFAULT_URL, cartItem);
  }

}
