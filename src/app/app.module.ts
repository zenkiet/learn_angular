import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicFormModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
