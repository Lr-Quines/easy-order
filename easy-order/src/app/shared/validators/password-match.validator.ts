import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(passwordField: string, confirmPasswordField: string): ValidatorFn {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const password = abstractControl.get(passwordField)?.value;
    const confirmPassword = abstractControl.get(confirmPasswordField)?.value;

    if (password !== confirmPassword) {
      abstractControl.get(confirmPasswordField)?.setErrors({ passwordMismatch: true });
      return {
        passwordMismatch: true
      };
    }

    abstractControl.get(confirmPasswordField)?.setErrors(null);
    return null;
  };
}
