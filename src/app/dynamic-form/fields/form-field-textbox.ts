import { FormField } from '../form-field';

export class FormFieldTextbox extends FormField<string> {
  override controlType = 'textbox';
  override wrapperClass = 'relative mt-2 rounded-md shadow-sm';
  override innerClass =
    'block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
  override labelClass = 'block text-sm font-medium text-gray-700';
}
