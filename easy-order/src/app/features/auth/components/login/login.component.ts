import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthContainerComponent } from '../auth-container/auth-container.component';

@Component({
  selector: 'eo-login',
  standalone: true,
  imports: [
    AuthContainerComponent,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    RouterLink,
    PasswordModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _MESSAGE_SERVICE = inject(MessageService);

  protected username: string = '';
  protected password: string = '';

  protected teste(): void {
    this._MESSAGE_SERVICE.add({
      severity: 'warn',
      summary: 'Usuário e/ou senha incorretos',
      detail: 'Corrija os dados ou crie uma nova conta'
    });
  }

}
