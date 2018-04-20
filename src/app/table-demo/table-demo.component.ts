import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatTableModule } from '@angular/material';
import { TablePaginationSettingsModel, TableSettingsModel } from '../table/table-settings.model';

@Component({
    moduleId: module.id,
    selector: 'app-table-demo',
    templateUrl: './table-demo.component.html',
    styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent {
    tableSettings: TableSettingsModel = <TableSettingsModel>{};
    tablePaginationSettings: TablePaginationSettingsModel = <TablePaginationSettingsModel>{};
    rowData = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    onNotifySelected(selectedRows: object[]) {
        console.log(selectedRows);
    }

    constructor() {
        this.tablePaginationSettings.enablePagination = true;
        this.tablePaginationSettings.pageSize = 5;
        this.tablePaginationSettings.pageSizeOptions = [5, 10, 15];
        this.tablePaginationSettings.showFirstLastButtons = true;
        this.tableSettings.columnNames = [
            {
                'name': 'position',
                'displayName': 'No',
                'disableSorting': false,
            },
            {
                'name': 'name',
                'displayName': 'Name',
                'disableSorting': true,
                'icon' : 'face'

            },
            {
                'name': 'weight',
                'displayName': 'Weight',
                'disableSorting': true,
                'icon' : 'home'
            },
            {
                'name': 'symbol',
                'displayName': 'Symbol',
                'disableSorting': false,
                'icon': 'face'
            },
        ];
    }
}
