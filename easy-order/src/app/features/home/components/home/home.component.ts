import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { FoodListService } from '../../../../core/services/food-list.service';
import { FoodCardComponent } from '../../../../shared/components/food-card/food-card.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { CartComponent } from '../../../cart/components/cart/cart.component';
import { PaymenteInfoComponent } from '../../../paymente-info/components/paymentInfo/paymente-info.component';
import { Item } from '../../../../core/models/item.model';

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
export class HomeComponent implements OnInit {
  foods: Item [] = [];

  constructor(private foodService: FoodListService) {}

  ngOnInit() {
    this.readList();
  }

  private readList(): void {
    this.foodService.readList().subscribe({
      next: (response: Item[]) => {
        this.foods = response;
      }
    });
  }
}

