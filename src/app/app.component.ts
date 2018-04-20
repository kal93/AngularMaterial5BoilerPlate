import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatCheckbox, MatCheckboxChange, MatCheckboxClickAction, MatRadioChange, MatTabChangeEvent } from '@angular/material';
import { TabsConfig, TabsNavBarConfig } from './tabs/tabs.config';
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
export class AppComponent  {

  title = 'Maaz';

  // navLinks: TabsNavBarConfig[];

  // tabs: TabsConfig[];

  // @ViewChild('Tab1')
  // Tab1: TemplateRef<any>;

  // @ViewChild('Tab2')
  // Tab2: TemplateRef<any>;

  // @ViewChild('Tab3')
  // Tab3: TemplateRef<any>;

  // @ViewChild('Tab4')
  // Tab4: TemplateRef<any>;

  // tabList: any;

  // defaultTab = 2;


  // @ViewChild('Maaz')

  // Maaz: TemplateRef<any>;

  // @ViewChild('Hana')

  // Hana: TemplateRef<any>;

  // @ViewChild('Maria')

  // Maria: TemplateRef<any>;


//   ngOnInit () {

//     // single route tabs
//     this.tabs = [
//       {
//         label: 'Maaz',
//         TabView: this.Tab1,

//       },
//       {
//         label: 'Tab 2',
//         TabView: this.Tab2
//       },
//       {
//         label: 'Tab 3',
//         TabView: this.Tab3,

//       },
//       {
//         label: 'Tab 4',
//         TabView: this.Tab4,
//         icon: 'flight_land'
//       },
//       {
//         label: 'Tab 5',
//         TabView: this.Tab4,
//         icon: 'flight_takeoff'
//       },
//       {
//         label: 'Tab 6',
//         TabView: this.Tab4,
//         icon: 'flight_land',
//         disabled: true
//       },
//       {
//       label: 'Tab 6',
//       TabView: this.Tab4,
//       }
//     ];

//     this.navLinks = [
//       {
//         tabLabel : 'Maaz',
//       },
//       {
//         tabLabel: 'Hana',
//         path : 'hana',
//         icon : 'face',

//       },
//       {
//         tabLabel: 'Kasumi',
//         path: 'kasumi',
//         icon: 'thumb_up',
//       },
//       {
//         tabLabel: 'Kasumi 2',
//         path: 'kasumi2',
//         icon: 'thumb_down'
//       }
//     ];
// }

//   selectedIndexChange(event) {
//       console.log(`${event} - selectedIndexChange Event`);
//       console.log(this.tabs[0].isActive);
//     }
//   tabChange(event: MatTabChangeEvent) {
//       console.log(`index:${event.index} tab:${event.tab.textLabel} - Tab Change Event`);
//     }

//     focusChange(event: MatTabChangeEvent) {
//       console.log(`index:${event.index} tab:${event.tab.textLabel} - Focus Change Event`);
//     }
}
