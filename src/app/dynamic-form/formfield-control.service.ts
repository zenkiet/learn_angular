import { Injectable } from '@angular/core';
import { FormField } from './form-field';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormValidation } from './entities/form-validation';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      const validator: ValidatorFn[] = this.mapValidator(input.validator);

      group[input.key] =
        validator.length > 0
          ? new FormControl(input.value || '', validator)
          : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  mapValidator(validators: FormValidation): ValidatorFn[] {
    const validatorFns: ValidatorFn[] = [];

    if (validators.required) {
      validatorFns.push(Validators.required);
    }

    if (validators.minLength !== undefined) {
      validatorFns.push(Validators.minLength(validators.minLength));
    }

    if (validators.maxLength !== undefined) {
      validatorFns.push(Validators.maxLength(validators.maxLength));
    }

    if (validators.email) {
      validatorFns.push(Validators.email);
    }

    if (validators.min !== undefined) {
      validatorFns.push(Validators.min(validators.min));
    }

    if (validators.max !== undefined) {
      validatorFns.push(Validators.max(validators.max));
    }

    return validatorFns;
  }
}
