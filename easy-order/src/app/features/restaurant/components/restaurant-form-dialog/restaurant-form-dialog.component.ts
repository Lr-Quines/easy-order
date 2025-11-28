import { Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'eo-restaurant-form-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    CalendarModule
  ],
  templateUrl: './restaurant-form-dialog.component.html',
  styleUrl: './restaurant-form-dialog.component.scss'
})
export class RestaurantFormDialogComponent {

  // #region ==========> PROPERTIES <==========
  protected readonly EMIT_CLOSE_DIALOG = output<void>({ alias: 'closeDialog' });
  // #endregion ==========> PROPERTIES <==========


  // #region ==========> LIFE CYCLE <==========
  // #endregion ==========> LIFE CYCLE <==========


  // #region ==========> FORM <==========
  // #endregion ==========> FORM <==========


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
