import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { UserService } from '../../services/user.service';
import { AuthContainerComponent } from "../auth-container/auth-container.component";

@Component({
  selector: 'eo-create-account',
  standalone: true,
  imports: [
    AuthContainerComponent,
    FloatLabelModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    RouterLink,
    InputTextModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  private readonly _USER_SERVICE = inject(UserService);

  protected username: string = '';
  protected password: string = '';
  protected confirmPassword: string = '';

  protected teste(): void {
    this._USER_SERVICE.insert().subscribe({
      next: (response) => {
        console.log(response)
      }
    });
  }

}
