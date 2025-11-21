import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../../features/home/data/menu-items';

@Injectable({
    providedIn: 'root'  
})

export class FoodListService {
    get getFood() {
        return MENU_ITEMS;
    }

}