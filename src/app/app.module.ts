import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [AppComponent, DynamicFormComponent, DynamicFormInputComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
