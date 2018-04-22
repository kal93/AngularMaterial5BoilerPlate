// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SqSelectComponent, SqSelectModule } from './select.module';
// import { SqSelectSettingsModel } from './select-settings.model';

// describe('SqSelectComponent', () => {

//     let component: SqSelectComponent;
//     let fixture: ComponentFixture<SqSelectComponent>;
//     let htmlElement: HTMLElement;
//     let sqSelectConfig: SqSelectSettingsModel = <SqSelectSettingsModel>{};

//     sqSelectConfig.dataSource = [
//         { value: 'dark', viewValue: 'Dark' },
//         { value: 'light', viewValue: 'Light' },
//         { value: 'sleek', viewValue: 'Sleek' }
//     ]

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 BrowserAnimationsModule,
//                 SqSelectModule
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(SqSelectComponent);
//         component = fixture.componentInstance;
//         htmlElement = fixture.nativeElement;
//         component.sqConfig = sqSelectConfig;
//         fixture.detectChanges();
//     });

//     it('should test implementation methods of ControlValueAccessor', () => {
//         let testValue = 'Jasmine';
//         let testFunction = (value: any) => { return; }
//         component.writeValue(testValue);
//         component.registerOnChange(testFunction);
//         component.registerOnTouched(testFunction);
//         expect(component.selectedValue).toEqual(testValue);
//         testValue = undefined;
//         component.writeValue(testValue);
//         expect(component.selectedValue).not.toEqual(testValue);
//     });

//     it('should test property values', () => {
//         component.selectedValue = 'Dark';
//         component.placeholder = 'Select Theme';
//         component.disabled = false;
//         component.required = true;
//         fixture.detectChanges();
//         let inputElement = htmlElement.querySelector('mat-select');
//         expect(inputElement.attributes['ng-reflect-model'].textContent).toEqual('Dark');
//         expect(inputElement.attributes['ng-reflect-placeholder'].textContent).toEqual('Select Theme');
//         expect(inputElement.attributes['ng-reflect-disabled'].textContent).toEqual('false');
//         expect(inputElement.attributes['ng-reflect-required'].textContent).toEqual('true');
//         expect(inputElement.attributes['aria-multiselectable'].textContent).toEqual('false');
//     });
// });
