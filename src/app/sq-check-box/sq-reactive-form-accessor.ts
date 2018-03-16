import {
    Component,
    Input,
  } from '@angular/core';
  import { FormControl } from '@angular/forms';

  export function noop() {
    return;
  }


  @Component({
    selector: `app-sq-reactive-from-accessor`,
    template: ``,
  })
  export class SqReactiveFormAccessorComponent {
    /**
     * Define the internal data model
     * (for form control support)
     */
    protected innerValue: any = '';

    /**
     * Define placeholder for callback (provided later by the control value accessor)
     * (for form control support)
     */
    protected onChangeCallback: (_: any) => void = noop;

    /**
     * Define placeholder for callback (provided later by the control value accessor)
     * (for form control support)
     */
    protected onTouchedCallback: () => void = noop;

    /**
     * Define the form control to get access to validators
     * (for form control support)
     */
    @Input()
    public formControl: FormControl;

    /**
     * Return the value
     * (for form control support)
     */
    public get value(): any {
      return this.innerValue;
    }

    /**
     * Set the accessor and call the onchange callback
     * (for form control support)
     */
    public set value(v: any) {
      if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
      }
    }

    /**
     * Set touched on blur
     * (for form control support)
     */
    public onBlur() {
      this.onTouchedCallback();
    }
    /**
     * Register onChange callback (from ControlValueAccessor interface)
     * (for form control support)
     */
    protected registerOnChange(fn: any) {
      this.onChangeCallback = fn;
    }

    /**
     * Register onTouched callback (from ControlValueAccessor interface)
     * (for form control support)
     */
    protected registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
    }


    /**
     * Write value to inner value (from ControlValueAccessor interface)
     * (for form control support)
     */
    protected writeValue(value: any) {
      // NOTE: Currently, this 'else' path seems untestable
      // istanbul ignore else
      if (value !== this.innerValue) {
        this.innerValue = value;
      }
    }
  }
