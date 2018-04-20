// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SqTableModule, SqTableComponent } from './table.module';

// describe('SqTableComponent', () => {
//     let component: SqTableComponent;
//     let fixture: ComponentFixture<SqTableComponent>;
//     let htmlElement: HTMLElement;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 BrowserAnimationsModule,
//                 SqTableModule
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(SqTableComponent);
//         component = fixture.componentInstance;
//         htmlElement = fixture.nativeElement;
//         component.columnNames = ['position', 'name', 'weight', 'symbol'];
//         component.rowData = [
//             { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//             { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' }
//         ];
//     });

//     it('should test number of columns and rows for table with single selection', () => {
//         fixture.detectChanges();
//         let tableColumns = htmlElement.querySelectorAll('mat-table mat-header-row mat-header-cell');
//         expect(tableColumns.length).toEqual(4);
//         let tableRows = htmlElement.querySelectorAll('mat-table mat-row');
//         expect(tableRows.length).toEqual(2);
//     });
//     it('should test number of columns and rows for table with multi selection', () => {
//         component.allowMultiSelect = true;
//         component.enableCheckbox = true;
//         fixture.detectChanges();
//         let tableColumns = htmlElement.querySelectorAll('mat-table mat-header-row mat-header-cell');
//         expect(tableColumns.length).toEqual(5);
//         let tableRows = htmlElement.querySelectorAll('mat-table mat-row');
//         expect(tableRows.length).toEqual(2);
//     });
//     it('should select all rows in table when multi selection is enabled', () => {
//         spyOn(component, 'isAllSelected').and.callThrough();
//         component.allowMultiSelect = true;
//         component.enableCheckbox = true;
//         fixture.detectChanges();
//         let tableHeaderCheckbox = htmlElement.querySelector('mat-checkbox');
//         tableHeaderCheckbox.dispatchEvent(new Event('change'));
//         expect(component.selection.selected.length).toEqual(component.dataSource.data.length);
//     });
//     it('should deselect all rows in table when multi selection is enabled', () => {
//         spyOn(component, 'isAllSelected').and.returnValue(true);
//         component.allowMultiSelect = true;
//         component.enableCheckbox = true;
//         fixture.detectChanges();
//         let tableHeaderCheckbox = htmlElement.querySelector('mat-checkbox');
//         tableHeaderCheckbox.dispatchEvent(new Event('change'));
//         expect(component.selection.selected.length).toEqual(0);
//     });
// });