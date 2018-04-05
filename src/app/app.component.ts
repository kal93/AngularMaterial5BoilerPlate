import { Component } from '@angular/core';
import { MatCheckbox, MatCheckboxChange, MatCheckboxClickAction, MatRadioChange } from '@angular/material';
import { TabsConfig } from './tabs/tabs.config';
import {
  AbstractControl, Validators,
  FormBuilder,
  // FormControl,
  FormGroup,
  FormControl
} from '@angular/forms';
// import { of } from 'rxjs/observable/of';
// import { TsRadioChange } from './radio-group/radio-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Maaz';
  tabList: TabsConfig[];
  constructor () {
    this.tabList = [
      {
        tabLabel : 'Maaz',
        disabled : true

      },
      {
        tabLabel: 'Hana',
        path : 'hana',
        icon : 'face',
        isActive : true

      },
      {
        tabLabel: 'Kasumi',
        position : 3,
        path: 'kasumi',
        icon: 'thumb_up',
      },
      {
        tabLabel: 'Kasumi 2',
        position : 4,
        path: 'kasumi2',
        icon: 'thumb_down'
      }
    ];
  }
}
