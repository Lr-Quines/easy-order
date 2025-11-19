import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { EMPTY, switchMap } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { passwordMatchValidator } from '../../../../shared/validators/password-match.validator';
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
    RouterLink,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  // #region ==========> PROPERTIES <==========
  private readonly _USER_SERVICE = inject(UserService);
  private readonly _MESSAGE_SERVICE = inject(MessageService);
  private readonly _FORM_BUILDER = inject(FormBuilder);
  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM <==========
  protected readonly FORM = this._FORM_BUILDER.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: passwordMatchValidator('password', 'confirmPassword')
    }
  );

  private get username(): string { return this.FORM.get('username')?.value ?? ''; }
  private get password(): string { return this.FORM.get('password')?.value ?? ''; }
  // #endregion ==========> FORM <==========


  // #region ==========> METHODS <==========
  protected create(): void {
    if (this.FORM.invalid) {
      this.FORM.markAllAsTouched();
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password
    };

    this._USER_SERVICE.readByUsername(user.username).pipe(
      switchMap((existingUser: User | undefined) => {
        if (existingUser) {
          this._MESSAGE_SERVICE.add({ severity: 'warn', detail: 'Usuário já cadastrado' });
          return EMPTY;
        }
        else {
          return this._USER_SERVICE.create(user);
        }
      })
    ).subscribe({
      next: () => this._MESSAGE_SERVICE.add({ severity: 'success', detail: 'Usuário cadastrado com sucesso' }),
    });
  }

  protected isInvalid(field: string): boolean {
    const control = this.FORM.get(field);
    return !!control && control.invalid && control.touched;
  }
  // #endregion ==========> METHODS <==========

}
