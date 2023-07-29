import { FormField } from './form-field';

export class FormFieldCheckBox extends FormField<string> {
  override controlType = 'checkbox';
}
