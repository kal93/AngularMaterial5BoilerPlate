import { Component, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { SelectSettingsModel } from './select-settings.model';

/**
 * @hidden
 */
// ControlValueAccessor provider for Select Component
export const SQ_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};


@Component({
    moduleId: module.id,
    selector: 'sq-select',
    templateUrl: './select.component.html',
    providers: [SQ_SELECT_CONTROL_VALUE_ACCESSOR],
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.mat-form-field-invalid]': 'validationMessage&&(selectModel.touched||selectModel.dirty)'
    },
    styles: [
        /*
         Provided Hack to manually apply error highlight for mat-select when sq-select is invalid
         Used ::ng-deep to override angular material styles
         */
        `
            :host.mat-form-field-invalid .mat-select ::ng-deep .mat-select-arrow {
            color:#f44336;
            }
        `
    ]
})
// Class definition for Select Component
export class SelectComponent implements ControlValueAccessor {
    /**
     * @description Text label displayed in the input area when the selct does not contain value.
     */
    @Input() placeholder?: string;
    /**
     * @description Specifies that an input field must be filled out before submitting the form.
     */
    @Input() required?: boolean;
    /**
     * @description Specifies whether the component is disabled.
     */
    @Input() disabled?: boolean;
    /**
     * @description Specifies whether the 'None' option is enabled.
     */
    @Input() enableReset?: boolean;
    /**
     * @description Specifies whether the multiple selection of the options is enabled.
     */
    @Input() enableMultiSelect?: boolean;
    /**
     * @description Specifies the tabOrder.
     */
    @Input() tabOrder?: number;
    /**
     * @description Text to be displayed as a hint under Select.
     */
    @Input() hintLabel?: string;
    /**
     * @description `sqConfig` is additional configuration settings provided to `sq-select`.
     */
    @Input() sqConfig: SelectSettingsModel;
    /**
     * @description Sets validation message for select control
     */
    @Input() validationMessage?: string;

    @ViewChild('selectModel')
    private selectModel: NgModel;
    /**
     * @hidden
     */
    // Holds value of Select
    private value: any;
    // Getters & Setters for Value
    /**
     * @hidden
     */
    get selectedValue() {
        return this.value;
    }
    /**
     * @hidden
     */
    set selectedValue(value) {
        this.value = value;
        this.propagateChange(this.value);
    }
    // Propagates changed value of Select
    private propagateChange = (value: any) => { };
    /**
     * @hidden
     */
    // Implementation for writeValue of ControlValueAccessor Interface
    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
        }
    }
    /**
     * @hidden
     */
    // Implementation for registerOnChange of ControlValueAccessor Interface
    registerOnChange(fn: (value: any) => void) {
        this.propagateChange = fn;
    }

    /**
     * @hidden
     */
    // Implementation for registerOnTouched of ControlValueAccessor Interface
    registerOnTouched(fn: (value: any) => void) { }
}
