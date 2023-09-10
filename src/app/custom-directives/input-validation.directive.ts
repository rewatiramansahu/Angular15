import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appInputValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputValidationDirective,
      multi: true
    }
  ]
})
export class InputValidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const value: string = control.value;
    if (!value) {
      return { required: true };
    }
    if (value.length < 5) {
      return { minlength: true };
    }
    if (!/^[a-zA-Z0-9]+$/.test(value)) {
      return { pattern: true };
    }
    return null;
  }

}
