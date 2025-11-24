import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { FoodCardComponent } from '../../../../shared/components/food-card/food-card.component'
import { NgFor } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FoodListService } from '../../../../core/services/food-list.service'
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

