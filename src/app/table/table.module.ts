import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatSortModule, MatPaginatorModule, MatTableModule, MatIconModule } from '@angular/material';
import { TableComponent } from './table.component';
import { TablePaginationSettingsModel, ColumnSettingsModel } from './table-settings.model';

export { TableComponent } from './table.component';
export { TablePaginationSettingsModel, ColumnSettingsModel } from './table-settings.model';
/**
 * @hidden
 */
@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatCheckboxModule,
        MatSortModule,
        MatPaginatorModule
    ],

    exports: [
        TableComponent]
})

export class TableModule { }
