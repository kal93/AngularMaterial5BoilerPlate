import { Component, Input, AfterViewInit, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableModule, MatTableDataSource, MatSort, ThemePalette, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TablePaginationSettingsModel, TableSettingsModel } from './table-settings.model';

@Component({
    moduleId: module.id,
    selector: 'sq-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
// Class definition for Table Component
export class TableComponent implements OnInit, AfterViewInit {

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
     * @description `sqPaginationConfig` is additional configuration settings provided to `sq-table`.Refer SqTablePaginationSettingsModel.
     */
    @Input() sqConfig: TableSettingsModel;
    /**
     * @description `sqPaginationConfig` is additional configuration settings provided to `sq-table`.Refer SqTablePaginationSettingsModel.
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
    /**
     * @description Local variable to convert JSON data object to MatTableDataSource
     */
    dataSource: MatTableDataSource<{}>;

    bogusDataSource: MatTableDataSource<{}>;

    @Input() bogusData: Object[] = null;
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
        for (const column of this.sqConfig.columnNames) {
            this.columnNames.push(column.name);
        }
        // Condition to add selection column to the table
        if (this.enableCheckbox) {
            this.columnNames.splice(0, 0, 'select');
            this.sqConfig.columnNames.splice(0, 0, {
                'name': 'select',
                'displayName': '#'
            });
        }
        // Setting selection model
        this.selection = new SelectionModel<{}>(this.allowMultiSelect, []);
        this.dataSource = new MatTableDataSource(this.rowData);
        this.bogusDataSource = new MatTableDataSource(this.bogusData);

    }
    /** Highlights the selected row on row click. */
    highlight(row: any) {
        this.selectedRowIndex = row.position;
    }
}

