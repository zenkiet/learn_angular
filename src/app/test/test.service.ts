import { Injectable } from '@angular/core';
import { FormField } from '../dynamic-form/form-field';
import { of } from 'rxjs';
import { FormFieldTextbox } from '../dynamic-form/fields/form-field-textbox';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  getFormFields() {
    const inputs: FormField<string>[] = [
      new FormFieldTextbox({
        key: 'username',
        label: 'Username',
        type: 'text',
        validator: {
          required: true,
          minLength: 3,
        },
        order: 1,
      }),

      // new FormFieldTextbox({
      //   key: 'email',
      //   label: 'Email',
      //   type: 'email',
      //   value: '',
      //   innerClass:
      //     'px-3 py-4 bg-indigo-100 rounded-lg border border-indigo-200 focus:outline-none focus:border-indigo-500',
      //   order: 2,
      // }),

      // new FormFieldDropDown({
      //   key: 'country',
      //   label: 'Country',
      //   options: [
      //     { key: 'usa', value: 'United States of America' },
      //     { key: 'br', value: 'Brazil' },
      //     { key: 'other', value: 'Other' },
      //   ],
      //   order: 3,
      // }),

      // new FormFieldCheckBox({
      //   key: 'agree',
      //   label: 'I accept terms and services',
      //   type: 'checkbox',
      //   order: 4,
      // }),

      // new FormFieldRadio({
      //   key: 'sex',
      //   label: 'Sex',
      //   type: 'radio',
      //   options: [
      //     { key: 'male', value: 'Male', valueClass: 'p-2' },
      //     { key: 'female', value: 'Female', valueClass: 'p-2' },
      //   ],
      //   order: 5,
      // }),

      //   new FormField<string>({
      //     controlType: 'radio',
      //     key: 'sex',
      //     label: 'Sex',
      //     type: 'radio',
      //     options: [
      //       { key: 'male', value: 'Male' },
      //       { key: 'female', value: 'Female' },
      //     ],
      //     order: 5,
      //   }),

      //   new FormField<string>({
      //     controlType: 'textarea',
      //     key: 'message',
      //     label: 'Mesage',
      //     type: 'textarea',
      //     order: 6,
      //   }),
    ];
    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
