import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { FoodCardComponent } from '../../../../shared/components/food-card/food-card.component'
import { NgFor } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FoodListService } from '../../../../core/services/food-list.service'



@Component({
  selector: 'home',
  standalone: true,
  imports: [
    Button,
    CardModule,
    SearchComponent,
    NgFor,
    FormsModule, 
    
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

