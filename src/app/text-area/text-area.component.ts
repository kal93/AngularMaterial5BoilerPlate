import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @hidden
 */
export const SQ_TEXT_AREA_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true,
};

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [SQ_TEXT_AREA_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaComponent implements ControlValueAccessor {

  @Input() placeholder: string;

  @Input() matAutosizeMinRows: number;

  @Input() matAutosizeMaxRows: number;

  @Input() tabOrder: number;

  @Input() hintText: string;

  @Input() readonly: boolean;

  @Input() disabled: boolean;

  @Input() required: boolean;

    /**
     * @hidden
     */
    // Holds value of text area
    private value: string | number;
    // Getters & Setters for Value
    /**
     * @hidden
     */
    get inputValue() {
        return this.value;
    }
    /**
     * @hidden
     */
    set inputValue(value) {
        this.value = value;
        this.propagateChange(this.value);
    }
    // Propogates changed value of TEXT AREA
    private propagateChange = (value: string | number) => { };
    /**
     * @hidden
     */
    writeValue(value: string | number) {
        if (value !== undefined) {
            this.value = value;
        }
    }
    /**
     * @hidden
     */
    registerOnChange(fn: (value: string | number) => void) {
        this.propagateChange = fn;
    }

    /**
     * @hidden
     */
    registerOnTouched(fn: (value: string | number) => void) { }
}
