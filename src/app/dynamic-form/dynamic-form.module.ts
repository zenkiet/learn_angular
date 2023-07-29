import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from '../dynamic-form-input/dynamic-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent, DynamicFormInputComponent],
})
export class DynamicFormModule {}
