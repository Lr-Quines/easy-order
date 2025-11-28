import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../services/user.service';
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
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // #region ==========> PROPERTIES <==========
  private readonly _MESSAGE_SERVICE = inject(MessageService);
  private readonly _USER_SERVICE = inject(UserService);
  private readonly _ROUTER = inject(Router);

  protected user: User = {} as User;
  // #endregion ==========> PROPERTIES <==========

  protected readByUsernameAndPassword(): void {
    this._USER_SERVICE.readByUsernameAndPassword(this.user.username, this.user.password).subscribe({
      next: (response: User | undefined) => {
        response
          ? this._ROUTER.navigate(['easy-order'])
          : this._MESSAGE_SERVICE.add({ severity: 'warn', detail: 'Usuário ou senha incorretos' });
      }
    });
  }

}
