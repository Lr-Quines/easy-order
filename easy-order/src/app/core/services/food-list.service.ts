import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'  
})

export class FoodListService {

    private readonly _HTTP_CLIENT = inject(HttpClient);
    
    private readonly _DEFAULT_URL = 'http://localhost:3000/items';

    public readList(): Observable<Item[]> {
        return this._HTTP_CLIENT.get<Item[]>(this._DEFAULT_URL);
    }

}