import { Component, Input, OnInit } from '@angular/core';
import { FormField } from './form-field';
import { FormGroup } from '@angular/forms';
import { FormfieldControlService } from './formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: [],
})
export class DynamicFormComponent implements OnInit {
  @Input() FormFields!: FormField<string>[] | null;
  form!: FormGroup;
  payLoad = '';

  constructor(private formFieldSerice: FormfieldControlService) {}

  ngOnInit(): void {
    this.form = this.formFieldSerice.toFormGroup(
      this.FormFields as FormField<string>[]
    );
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
