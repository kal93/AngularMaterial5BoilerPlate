import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';


import {  MatButtonModule, MatCheckboxModule , MatRadioModule , MatCardModule,
          MatIconModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SqCheckBoxComponent } from './sq-check-box/sq-check-box.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { TextAreaComponent } from './text-area/text-area.component';



@NgModule({
  declarations: [
    AppComponent,
    SqCheckBoxComponent,
    RadioGroupComponent,
    TextAreaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule, MatCheckboxModule,
    MatRadioModule, MatCardModule, MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
