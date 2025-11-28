import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { Restaurant } from '../../../../core/models/restaurant.model';
import { RestaurantFormDialogComponent } from '../restaurant-form-dialog/restaurant-form-dialog.component';

@Component({
  selector: 'eo-restaurant-list',
  standalone: true,
  imports: [
    DividerModule,
    TableModule,
    SpeedDialModule,
    RestaurantFormDialogComponent,
    DialogModule
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit {

  // #region ==========> PROPERTIES <==========
  protected columns: Column[] = [
    { field: 'restaurant', header: 'Restaurante' },
    { field: 'contact', header: 'Contato' },
    { field: 'address', header: 'Endereço' },
    { field: 'businessHours', header: 'Horário de funcionamento' }
  ];

  protected restaurants: Restaurant[] = [
    {
      restaurant: 'Churrascaria e Galeteria Komka',
      address: 'Av. Bahia, 1275 - São Geraldo, Porto Alegre - RS, 90240-550',
      contact: '(51) 3222-1881',
      openingHours: new Date(),
      closingHours: new Date()
    },
    {
      restaurant: 'NENI - Café, Bar e Restaurante',
      address: 'R. Me. Verônica, 30 - Sala 3 - Centro, Gramado - RS, 95670-000',
      contact: '(54) 3295-1190',
      openingHours: new Date(),
      closingHours: new Date()
    },
  ];

  protected showRestaurantFormDialog = false;
  // #endregion ==========> PROPERTIES <==========


  // #region ==========> LIFE CYCLE <==========
  public ngOnInit(): void {
  }
  // #endregion ==========> LIFE CYCLE <==========


  // #region ==========> HTTP METHODS <==========

  // #region GET
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
