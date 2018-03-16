import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioChange, MatRadioButton } from '@angular/material';

import { RadioConfig } from './radio.config';
import { ControlValueAccessor } from '@angular/forms';
import { ThemePalette } from '@angular/material';

/**
 * Expose the MatRadioChange event as TsRadioChange
 */
export class TsRadioChange extends MatRadioChange {};


/**
 * Custom control value accessor for our component
 * This allows our custom components to access the underlying form validation via the base class
 */
/* tslint:disable:no-use-before-declare */
export const SQ_RADIO_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};
@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  exportAs: 'SqRadioGroup',
  providers: [SQ_RADIO_CONTROL_VALUE_ACCESSOR],
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {

  /**
   * Accept an array of radio options in the {@link TsRadioOption} format
   */
  @Input()
  public options: RadioConfig[];

  /**
   * Define the theme. {@link TsStyleThemeTypes}
   */
  @Input()
  public theme: ThemePalette = 'primary';

  /**
   * Emit event when a selection occurs
   */
  @Output()
  public change: EventEmitter<TsRadioChange> = new EventEmitter();

  protected innerValue: any = '';

  // value:any;

  protected onChangeCallback: (_: any) => void ;

  protected onTouchedCallback: () => void ;

  public get value(): any {
    return this.innerValue;
  };

  public set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }


  /**
   * Seed the initial value with the first checked option found
   */
  public ngOnInit(): void {
    const initialSelection = this.defaultSelection(this.options);

    if (initialSelection) {
      this.value = initialSelection;

      // istanbul ignore else
      // if (this.formControl) {
      //   this.formControl.setValue(initialSelection);
      // }

      // Tell Angular that we have updated the component internally
      this.changeDetectorRef.markForCheck();
    }
  }

   writeValue(value: any) {
    // NOTE: Currently, this 'else' path seems untestable
    // istanbul ignore else
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

   registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

   registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


  /**
   * Return an option that should be checked by default
   *
   * If multiple items are marked as 'checked' by default, the first on found will win.
   *
   * @param options - The array of options
   * @return The selected value
   */
  private defaultSelection(options: RadioConfig[]): string | null {
    const found = options.filter((v: RadioConfig) => {
      return v.checked;
    });

    return (found && found[0] && found[0].value) ? found[0].value : null;
  }

}
