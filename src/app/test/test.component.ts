import { Component } from '@angular/core';
import { TestService } from './test.service';
import { Observable } from 'rxjs';
import { FormField } from '../dynamic-form/form-field';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [],
})
export class TestComponent {
  formFields$: Observable<FormField<string>[]>;
  constructor(service: TestService) {
    this.formFields$ = service.getFormFields();
  }
}
