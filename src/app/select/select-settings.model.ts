// This interface contains properties of Select Component
/**
 * @description SqSelectSettingsModel is a custom type which is used in `sq-select`
 * & contains config properties of `sq-select`.
 */
export interface SelectSettingsModel {
    /**
     * @description
     * Used to specify list of data for the `sq-select`.
     * @property `value` is of type string which indicates the unique value for each value.
     * @property `viewValue` is string that is displayed on the view for the value.
     */
     dataSource: Array<{
        value: string,
        viewValue: string,
    }>;
}
