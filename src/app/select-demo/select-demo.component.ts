import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';
import { SelectSettingsModel } from '../select/select-settings.model';

import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'app-select-demo',
    templateUrl: './select-demo.component.html',
    styleUrls: ['./select-demo.component.css']
})
// Class definition to demo Select Component
export class SelectDemoComponent implements OnInit {
    reactiveForm: FormGroup;
    sqSelectConfig: SelectSettingsModel = <SelectSettingsModel>{};
    sqSelectConfigForTDF: SelectSettingsModel = <SelectSettingsModel>{};
    sqSelectConfigForNgModel: SelectSettingsModel = <SelectSettingsModel>{};
    sqSelectConfigForCountry: SelectSettingsModel = <SelectSettingsModel>{};
    @ViewChild('hidModel')
    hidModel: NgModel;
    country: FormControl;
    hidValidationMessage: string;
    constructor(private http:HttpClient) {

        this.reactiveForm = new FormGroup({
            theme: new FormControl('')
        });

        this.country = new FormControl();

      
        // this.sqSelectConfig.dataSource = [
        //     { value: 'Dark', viewValue: 'Dark' },
        //     { value: 'Light', viewValue: 'Light' },
        //     { value: 'Sleek', viewValue: 'Sleek' }
        // ]

       
        // this.sqSelectConfigForTDF.dataSource = [
        //     { value: 'HID 1', viewValue: 'HID 1' },
        //     { value: 'HID 2', viewValue: 'HID 2' },
        //     { value: 'HID 3', viewValue: 'HID 3' },
        //     { value: 'HID 4', viewValue: 'HID 4' },
        //     { value: 'HID 5', viewValue: 'HID 5' },
        //     { value: 'HID 6', viewValue: 'HID 6' },
        //     { value: 'HID 7', viewValue: 'HID 7' },
        //     { value: 'HID 8', viewValue: 'HID 8' },
        // ]

   
        this.sqSelectConfigForNgModel.dataSource = [
            { value: 'NWL', viewValue: 'NWL' },
            { value: 'GJJ', viewValue: 'GJJ' },
            { value: 'SHH', viewValue: 'SHH' },
            { value: 'KOH', viewValue: 'KOH' },
            { value: 'HNH', viewValue: 'HNH' },
            { value: 'HFH', viewValue: 'HFH' },
            { value: 'HHA', viewValue: 'HHA' },
            { value: 'SJP', viewValue: 'SJP' },
        ]

  
        this.sqSelectConfigForCountry.dataSource = [
            { value: 'INDIA', viewValue: 'INDIA' },
            { value: 'U.S.A', viewValue: 'U.S.A' },
            { value: 'JAPAN', viewValue: 'JAPAN' },
            { value: 'KOREA', viewValue: 'KOREA' },
            { value: 'FRANCE', viewValue: 'FRANCE' },
            { value: 'GERMANY', viewValue: 'GERMANY' }
        ]
    }

      url :string = 'http://localhost:4200/assets/select-mock-data-2.json';

      url2 :string = 'http://localhost:4200/assets/select-mock-data.json';

    ngOnInit() {
        this.getData(this.url2)
            .subscribe( (data) => {
              console.log(data);
              this.sqSelectConfig.dataSource = data;
              console.log(this.sqSelectConfig.dataSource);
            });

            this.getData(this.url).subscribe( (resp:any) => {
              console.log(resp);
              this.sqSelectConfigForTDF.dataSource = resp;
            });
    }

    getData(url:string)  {
      return this.http.get <any> (url);
    }
    
    selectedValue: string[] = ['HID 5'];
    selected: string = 'GJJ';
    ngDoCheck() {
        this.hidValidationMessage = this.hidModel.hasError('invalidValue') ? 'Restricted Option!!' : this.hidModel.hasError('required') ? 'This is Required' : '';
    }
}
