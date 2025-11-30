import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';


@Component({
  selector: 'eo-paymente-info',
  standalone: true,
  imports: [
    CardModule,
    Button
],
  templateUrl: './paymente-info.component.html',
  styleUrl: './paymente-info.component.scss'
})
export class PaymenteInfoComponent {

}
