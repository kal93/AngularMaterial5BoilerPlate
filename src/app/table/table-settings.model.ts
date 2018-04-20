// This class contains properties of table Component
/**
 * @description SqTablePaginationSettingsModel is a custom type which is used in `sq-table` for pagination properties
 */

export interface TablePaginationSettingsModel {
    /**
     * @description enable Pagination of rows
     */
    enablePagination: boolean;
    /**
     * @description Number of items to display on a page. By default set to 50.
     */
    pageSize: number;
    /**
     * @description The set of provided page size options to display to the user.
     */
    pageSizeOptions: number[];
    /**
     * @description Whether to show the first/last buttons UI to the user.
     */
    showFirstLastButtons: boolean;
}

export interface TableSettingsModel {
    /**
     * @description Column names for the table
     */
    columnNames?: Array<{
        icon?: string;
        name: string,
        displayName: string;
        disableSorting?: boolean;
    }>;
}
