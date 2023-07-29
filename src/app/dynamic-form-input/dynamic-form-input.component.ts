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
  get Touched() {
    return this.form.controls[this.input.key].touched;
  }
}
