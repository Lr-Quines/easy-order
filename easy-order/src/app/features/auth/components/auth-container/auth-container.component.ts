import { Component } from '@angular/core';

@Component({
  selector: 'eo-auth-container',
  standalone: true,
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {

  protected user: string = '';
  protected password: string = '';

}
