import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { Restaurant } from '../../../../core/models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'eo-restaurant-form-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  templateUrl: './restaurant-form-dialog.component.html',
  styleUrl: './restaurant-form-dialog.component.scss'
})
export class RestaurantFormDialogComponent implements OnInit {

  // #region ==========> PROPERTIES <==========
  private readonly _FORM_BUILDER = inject(FormBuilder);
  private readonly _RESTAURANT_SERVICE = inject(RestaurantService);

  public restaurantId = input.required<string>();

  protected readonly EMIT_CLOSE_DIALOG = output<void>({ alias: 'closeDialog' });
  protected readonly EMIT_FINISH_CREATE = output<void>({ alias: 'finishCreate' });
  // #endregion ==========> PROPERTIES <==========


  // #region ==========> LIFE CYCLE <==========
  ngOnInit(): void {
    if (this.restaurantId().length > 0) {
      this.readById()
    }
  }
  // #endregion ==========> LIFE CYCLE <==========


  // #region ==========> FORM <==========
  protected readonly FORM = this._FORM_BUILDER.group({
    restaurant: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
    openingHours: [new Date(), Validators.required],
    closingHours: [new Date(), Validators.required]
  });

  private get restaurant(): string { return this.FORM.get('restaurant')?.value ?? ''; }
  private get contact(): string { return this.FORM.get('contact')?.value ?? ''; }
  private get address(): string { return this.FORM.get('address')?.value ?? ''; }
  private get openingHours(): Date { return this.FORM.get('openingHours')?.value ?? new Date(); }
  private get closingHours(): Date { return this.FORM.get('closingHours')?.value ?? new Date(); }
  // #endregion ==========> FORM <==========


  // #region ==========> HTTP METHODS <==========

  // #region GET
  private readById(): void {
    this._RESTAURANT_SERVICE.readById(this.restaurantId()).subscribe({
      next: (response: Restaurant | undefined) => {
        if (response) {
          this.FORM.patchValue({
            restaurant: response.restaurant,
            contact: response.contact,
            address: response.address,
            openingHours: response.openingHours,
            closingHours: response.closingHours
          });
        }
      }
    });
  }
  // #endregion GET

  // #region POST
  protected create(): void {
    const restaurant: Restaurant = {
      restaurant: this.restaurant,
      contact: this.contact,
      address: this.address,
      openingHours: this.openingHours,
      closingHours: this.closingHours
    };

    this._RESTAURANT_SERVICE.create(restaurant).subscribe({
      next: () => {
        this.EMIT_FINISH_CREATE.emit();
        this.EMIT_CLOSE_DIALOG.emit();
      }
    });
  }
  // #endregion POST

  // #region PUT
  protected update(): void {
    const restaurant: Restaurant = {
      restaurant: this.restaurant,
      contact: this.contact,
      address: this.address,
      openingHours: this.openingHours,
      closingHours: this.closingHours
    };

    this._RESTAURANT_SERVICE.updateById(this.restaurantId(), restaurant).subscribe({
      next: () => {
        this.EMIT_FINISH_CREATE.emit();
        this.EMIT_CLOSE_DIALOG.emit();
      }
    });
  }
  // #endregion PUT

  // #region DELETE
  // #endregion DELETE

  // #endregion ==========> HTTP METHODS <==========


  // #region ==========> UTILS <==========
  // #endregion ==========> UTILS <==========

}
