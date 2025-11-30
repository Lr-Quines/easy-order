import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { FoodListService } from '../../../../core/services/food-list.service';
import { FoodCardComponent } from '../../../../shared/components/food-card/food-card.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { CartComponent } from '../../../cart/components/cart/cart.component';
import { PaymenteInfoComponent } from '../../../paymente-info/components/paymentInfo/paymente-info.component';
import { MenuItem } from '../../data/menu-items';



@Component({
  selector: 'home',
  standalone: true,
  imports: [
    Button,
    CardModule,
    SearchComponent,
    NgFor,
    FormsModule,
    FoodCardComponent,
    PaymenteInfoComponent,
    CartComponent

],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  foods: MenuItem [] = [];

  constructor(private foodService: FoodListService) {}

  ngOnInit() {
    this.foods = this.foodService.getFood;
  }
}

