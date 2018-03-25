import { Component } from '@angular/core';
import { MatCheckbox, MatCheckboxChange, MatCheckboxClickAction, MatRadioChange } from '@angular/material';
// import { SqCheckBoxComponent } from './sq-check-box/sq-check-box.component';

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
//   id: string;
//   value: string;

//   onCheckboxChanged: any;

//   // labelPosition = 'before';
//   // color = 'primary';
//   Sqindeterminate: boolean;
//   SqChecked: boolean;
//   SqDisabled: boolean;

//   testForm: any;

//  constructor ( private formBuilder: FormBuilder) {


//  this.testForm = formBuilder.group({
//    'SqCheckbox': new FormControl(''),
//     // 'MatCheckbox': new FormControl(),
//  });
//  }

//   // event emitted when checkbox is clicked
//   sqChange(event: any) {
//      this.SqChecked = event.checked;
//        console.log('Checkbox changed ' + event.checked);
//        // console.log(this.checked + ' this.checked');
//   }

//   // event emitted when indeterminate state changes
//   sqIndeterminateChange(event: any) {
//     this.Sqindeterminate = event;
//     console.log('Inside onIndeterminateChange ' + this.Sqindeterminate);
//   }

//   onSubmit(testForm) { console.log('Form Submitted ' + this.testForm.get('SqCheckbox').value);
//               }

//   DEMO_ITEMS = [
//   {
//     value: 'foo_value',
//     displayValue: 'Foo Display',

//   },
//   {
//     value: 'bar_value',
//     displayValue: 'Bar Display',
//     checked: true,
//     disabled: true,
//   },
//   {
//     value: 'baz_value',
//     displayValue: 'Baz Display',
//     required: true,

//   },
// ];
//  DEMO_ITEMS2 = [
//   {
//     value: 'foo2_value',
//     displayValue: 'Foo2 Display',
//     checked: true,
//   },
//   {
//     value: 'bar2_value',
//     displayValue: 'Bar2 Display',
//     disabled: true,
//   },
//   {
//     value: 'baz2_value',
//     displayValue: 'Baz2 Display',
//     required: true,
//   },
// ];

// DEMO_ITEMS3 = [
//   {
//     value: 'Maaz',
//     displayValue: 'Maaz Display',

//   },
//   {
//     value: 'Hana',
//     displayValue: 'Hana Display',
//     disabled: true,
//   },
//   {
//     value: 'Maria',
//     displayValue: 'Maria Display',
//     required: true,
//   },
// ];

// countries_list = [
//   {
//     value: 'Germany',
//     displayValue: 'Germany',
//   },
//   {
//     value: 'India',
//     displayValue: 'India',
//     disabled: true,
//   },
//   {
//     value: 'USA',
//     displayValue: 'USA',
//     required: true,
//   },
//   {
//     value: 'UK',
//     displayValue: 'UK',
//   }
// ];

// seasons_list = [
//   {
//     value: 'Winter',
//     displayValue: 'Winter',
//   },
//   {
//     value: 'Summer',
//     displayValue: 'Summer',
//   },
//   {
//     value: 'Spring',
//     displayValue: 'Spring',
//   },
// ];


//   items$ = of(this.DEMO_ITEMS);
//   items2$ = of(this.DEMO_ITEMS2);
//   items3$ = of(this.DEMO_ITEMS3);
//   countries = of(this.countries_list);
//   seasons = of(this.seasons_list);

//   myForm = this.formBuilder.group({
//     myRadioGroup: [

//     ],
//   });
//   countryForm: FormGroup;

//   templateForm: FormGroup;

//   seasonsForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//   ) {

//     // for template driven form
//     this.templateForm = new FormGroup({
//       TemplateRadioGroup: new FormControl('Maaz')
//     });

//     // for template driven
//     // this.seasonsForm = new FormGroup({
//     //   seasonsRadioGroup: new FormControl('Winter')
//     // });

//     // countries radio group
//     this.countryForm = formBuilder.group({
//       countriesRadioGroup: new FormControl('India'),
//     });
//   }

//   selected(e: MatRadioChange) {
//     console.log('Demo radio changed: ', e);
//   }

//   submit(v: any) {
//     console.log('DEMO: form submission: ', v);
//   }

//   countryFormSubmit(v: any) {
//     console.log('DEMO: form submission: ', v);
//   }

// text-area example starts below -----------------
    commentForm : FormGroup;
    
   // commentBox:FormControl;

    constructor(private formBuilder:FormBuilder) {
      this.commentForm = this.formBuilder.group( {
        commentBox: new FormControl(),}
      );

    }

    commentFormSubmit(v:any){
      console.log('comment Form submitted', v);
    }
}
