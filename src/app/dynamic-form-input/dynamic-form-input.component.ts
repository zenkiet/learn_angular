import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../dynamic-form/form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styles: [],
})
export class DynamicFormInputComponent {
  @Input() input!: FormField<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.input.key].valid;
  }
  get isDirty() {
    return this.form.controls[this.input.key].dirty;
  }
  get isTouched() {
    return this.form.controls[this.input.key].touched;
  }

  get hasError() {
    return this.form.controls[this.input.key].errors;
  }

  get errorMessage(): string {
    const errors = this.form.controls[this.input.key].errors;
    if (errors?.['required']) {
      return `${this.input.label} is required`;
    } else if (errors?.['minlength']) {
      return `${this.input.label} must be at least ${errors?.['minlength']?.['requiredLength']} characters long`;
    } else if (errors?.['maxlength']) {
      return `${this.input.label} cannot be more than ${errors?.['maxlength']?.['requiredLength']} characters long`;
    } else if (errors?.['email']) {
      return `${this.input.label} must be a valid email address`;
    }
    return '';
  }
}
