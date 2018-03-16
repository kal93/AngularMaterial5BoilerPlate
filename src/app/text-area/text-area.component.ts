import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  @Input() placeholder: string;

  @Input() matAutosizeMinRows: number;

  @Input() matAutosizeMaxRows: number;

  @Input() tabOrder: number;

  @Input() hintText: string;

  @Input() readonly: boolean;

  @Input() disabled: boolean;

}
