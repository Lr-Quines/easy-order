import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { Restaurant } from '../../../../core/models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantFormDialogComponent } from '../restaurant-form-dialog/restaurant-form-dialog.component';

@Component({
  selector: 'eo-restaurant-list',
  standalone: true,
  imports: [
    DividerModule,
    TableModule,
    SpeedDialModule,
    RestaurantFormDialogComponent,
    DialogModule,
    DatePipe,
    TooltipModule
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit {

  // #region ==========> PROPERTIES <==========
  private readonly _RESTAURANT_SERVICE = inject(RestaurantService);

  protected columns: Column[] = [
    { field: 'restaurant', header: 'Restaurante' },
    { field: 'contact', header: 'Contato' },
    { field: 'address', header: 'Endereço' },
    { field: 'businessHours', header: 'Horário de funcionamento' }
  ];

  protected restaurants: Restaurant[] = [];

  protected showRestaurantFormDialog = false;

  protected idToUpdate: string = '';
  // #endregion ==========> PROPERTIES <==========


  // #region ==========> LIFE CYCLE <==========
  public ngOnInit(): void {
    this.readList();
  }
  // #endregion ==========> LIFE CYCLE <==========


  // #region ==========> HTTP METHODS <==========

  // #region GET
  protected readList(): void {
    this._RESTAURANT_SERVICE.readList().subscribe({
      next: (response: Restaurant[]) => {
        this.restaurants = response;
      }
    })
  }
  // #endregion GET

  // #region POST
  // #endregion POST

  // #region PUT
  // #endregion PUT

  // #region DELETE
  // #endregion DELETE

  // #endregion ==========> HTTP METHODS <==========


  // #region ==========> UTILS <==========
  // #endregion ==========> UTILS <==========

}

interface Column {
  field: string;
  header: string;
}
