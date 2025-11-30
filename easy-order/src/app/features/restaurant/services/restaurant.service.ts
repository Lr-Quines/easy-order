import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Restaurant } from '../../../core/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private readonly _HTTP_CLIENT = inject(HttpClient);

  private readonly _DEFAULT_URL = 'http://localhost:3000/restaurants';

  public create(restaurant: Restaurant): Observable<Object> {
    return this._HTTP_CLIENT.post(this._DEFAULT_URL, restaurant);
  }

  public updateById(id: string, restaurant: Restaurant): Observable<Object> {
    return this._HTTP_CLIENT.put(`${this._DEFAULT_URL}/${id}`, restaurant);
  }

  public readById(id: string): Observable<Restaurant | undefined> {
    return this._HTTP_CLIENT.get<Restaurant[]>(`${this._DEFAULT_URL}/?id=${id}`)
      .pipe(map(restaurants => restaurants.length > 0 ? restaurants[0] : undefined));
  }

  public readList(): Observable<Restaurant[]> {
    return this._HTTP_CLIENT.get<Restaurant[]>(this._DEFAULT_URL);
  }

}
