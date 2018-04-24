import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {  MatButtonModule, MatCheckboxModule , MatRadioModule , MatCardModule,
          MatIconModule, MatInputModule, MatTabsModule, MatSlideToggleModule } from '@angular/material';

import { TableModule } from './table/table.module';

import { AppComponent } from './app.component';
import { SqCheckBoxComponent } from './sq-check-box/sq-check-box.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { SelectModule } from './select/select.module';
import { SelectDemoComponent } from './select-demo/select-demo.component';

const routes = [
  {
    path: 'hana',
    component: AppComponent
  },
  {
    path: 'kasumi',
    component: AppComponent
  },
  {
    path: 'kasumi2',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SqCheckBoxComponent,
    RadioGroupComponent,
    TextAreaComponent,
    TabsComponent,
    // TableComponent,
    TableDemoComponent,
    
    SelectDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule, MatCheckboxModule, MatSlideToggleModule,
    MatRadioModule, MatCardModule, MatInputModule, MatTabsModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    TableModule , SelectModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
