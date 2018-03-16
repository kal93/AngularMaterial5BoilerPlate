import { Component, forwardRef , OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { ThemePalette } from '@angular/material/core/typings/common-behaviors/color';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const SQ_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting : forwardRef(() => SqCheckBoxComponent),
  multi: true,
};

@Component({
  selector: 'app-sq-check-box',
  templateUrl: './sq-check-box.component.html',
  styleUrls: ['./sq-check-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [SQ_CHECKBOX_CONTROL_VALUE_ACCESSOR]

})
export class SqCheckBoxComponent {


 @Input() labelPosition: 'before' | 'after';
 @Input() color: ThemePalette;
 @Input() checked: boolean;
 @Input() name: string;
 @Input() disableRipple: boolean;
 @Input() disabled: boolean;
 @Input() indeterminate: boolean;
 @Input() id: string;
 @Input() required: boolean;

 @Output() public sqChange: EventEmitter <boolean> = new EventEmitter;
 @Output() sqIndeterminateChange: EventEmitter<boolean> = new EventEmitter();

 _onChange (value: any) {
   return;
 }


// event emitted when checkbox is clicked
 onChange($event: boolean) {
      this.checked = !this.checked;
   // this.indeterminate = false;
       this._onChange(this.checked);
       this.sqChange.emit($event);
 }

 // event emitted when indeterminate state changes
  onIndeterminateChange($event: boolean ) {
     this.sqIndeterminateChange.emit($event);
  }

writeValue(obj: any) {
  if (obj !== undefined) {
    console.log(obj + ' obj');
    this.checked = obj;
   }
  console.log(obj + ' writeValue');
}

 registerOnChange(fn: (value: any) => void ) {
      this._onChange = fn;
 }

registerOnTouched(fn: any) {
  console.log(fn + 'registerOnTouched');
}

}
