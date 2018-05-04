import { Component, Input, AfterViewInit, ViewChild, OnInit, OnChanges, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MatTableModule, MatTableDataSource, MatSort, ThemePalette, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TablePaginationSettingsModel, ColumnSettingsModel } from './table-settings.model';
/**
 * @name `sq-table`
 * @description `sq-table` component is to displays data in tabular format
 * @example Import `SqTableModule` & add it to the `imports` array.
 * ```
 * import { SqTableModule } from 'sqvue';
 *
 * NgModule({
 *   declarations: [
 *       ...
 *   ],
 *   imports: [
 *       SqTableModule
 *   ],
 * ```
 * HTML usage of `sq-table`
 * ```
 * <sq-table [rowData]="rowData"
 *           [enableCheckbox]="true"
 *           [allowMultiSelect]="true"
 *           (getSelectedRows)="onNotifySelected($event)"
 *           [sqColumnDefinition]="columnDefinition"
 *           [sqPaginationConfig]="tablePaginationSettings">
 * </sq-table>
 * ```
 * @example Corresponding TS Configuration
 * ```
 *  columnDefinition: SqColumnSettingsModel[]= [];
 *  tablePaginationSettings: SqTablePaginationSettingsModel = <SqTablePaginationSettingsModel>{};
 * rowData = [
 *       { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
 *       { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
 *       { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
 *       { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
 *       { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
 *       { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
 *       { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
 *       { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
 *       { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
 *       { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
 *       { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
 *       { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
 *       { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
 *       { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
 *       { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
 *       { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
 *       { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
 *       { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
 *       { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
 *       { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
 *   ];
 *   constructor() {
 *       this.tablePaginationSettings = new SqTablePaginationSettingsModel();
 *       this.tablePaginationSettings.enablePagination = true;
 *       this.tablePaginationSettings.pageSize = 5;
 *       this.tablePaginationSettings.pageSizeOptions = [5, 10, 15];
 *       this.tablePaginationSettings.showFirstLastButtons = true;
 *       this.columnDefinition = [
 *           {
 *               'name': 'position',
 *               'displayName': 'No',
 *               'disableSorting': false,
 *           },
 *           {
 *               'name': 'name',
 *               'displayName': 'Name',
 *               'disableSorting': false,
 *               'icon' : 'face'
 *
 *          },
 *           {
 *               'name': 'weight',
 *               'displayName': 'Weight',
 *               'disableSorting': false,
 *               'icon' : 'home'
 *           },
 *           {
 *               'name': 'symbol',
 *               'displayName': 'Symbol',
 *               'disableSorting': true
 *           },
 *       ];
 *  }
 * ```
 */
@Component({
    moduleId: module.id,
    selector: 'sq-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    encapsulation: ViewEncapsulation.None,
})
// Class definition for Table Component
export class TableComponent implements OnInit, AfterViewInit, OnChanges {

    selectedRowIndex = -1;

    /**
     * @description Column names for the table
     */
    columnNames: string[] = [];
    /**
     * @description enable selection of rows
     */
    @Input() enableCheckbox: boolean;
    /**
     * @description Allowing/Dis-allowing multi-selection of rows
     */
    @Input() allowMultiSelect: boolean;
    /**
     * @description `sqColumnDefinition` is additional configuration settings provided to `sq-table`.Refer [sqColumnDefinition].
     */
    @Input() sqColumnDefinition: ColumnSettingsModel[];
    /**
     * @description `sqPaginationConfig` is additional configuration settings provided to `sq-table`.Refer [SqTablePaginationSettingsModel].
     */
    @Input() sqPaginationConfig?: TablePaginationSettingsModel;
    /**
     * @description Data which will be displayed in tabular format
     */
    @Input() rowData: object[];
    /**
     * @description variable to store selection data
     */
    selection = new SelectionModel<{}>();

    @Input() defaultChecked?: any;
    /**
     * @description Local variable to convert JSON data object to MatTableDataSource
     */
    dataSource: MatTableDataSource<{}>;
    /**
     * @description ViewChild to get the MatSort directive from DOM
     */
    @ViewChild(MatSort) sort: MatSort;
    /**
     * @description ViewChild to get the MatPaginator directive from DOM
     */
    @ViewChild(MatPaginator) paginator: MatPaginator;
    /**
     * @description Lifecycle hook that is called after a component's view has been fully initialized.
     */
    @Output() getSelectedRows = new EventEmitter();

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    /**
     * @hidden
     */
    /**
     * Lifecycle hook that is called when any data-bound property of a datasource changes.
     */
    ngOnChanges() {
        this.dataSource = new MatTableDataSource(this.rowData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        this.getSelectedRows.emit(this.selection.selected);

    }
    /** Gets the selected rows array on row select. */
    rowSelect() {
        this.getSelectedRows.emit(this.selection.selected);
    }
    /**
     * @hidden
     */
    /**
     * Initialize the directive/component after Angular first displays the data-bound properties
     * and sets the directive/component's input properties
     */


    ngOnInit() {
        for (const column of this.sqColumnDefinition) {
            this.columnNames.push(column.name);
        }
        // Condition to add selection column to the table
        if (this.enableCheckbox) {
            this.columnNames.splice(0, 0, 'select');
            this.sqColumnDefinition.splice(0, 0, {
                'name': 'select',
                'displayName': '#'
            });
        }
        console.log('Before splice ' + JSON.stringify(this.rowData));
        let rowDataCopy = this.dataSource;
        // let defaultChecked; /*= rowDataCopy.data.splice(0, 2);*/
        console.log('After splice ' + JSON.stringify(this.rowData));
        // Setting selection model
        this.selection = new SelectionModel<{}>(this.allowMultiSelect, this.defaultChecked);
        this.dataSource = new MatTableDataSource(this.rowData);
        console.log(this.selection.selected);
    }
    /** Highlights the selected row on row click. */
    highlight(row: any) {
        this.selectedRowIndex = row.position;
    }
}

