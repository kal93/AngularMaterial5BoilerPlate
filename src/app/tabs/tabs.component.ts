import { Component, Input , OnInit, Output, EventEmitter } from '@angular/core';
import { TabsConfig, TabsNavBarConfig } from './tabs.config';
import { ThemePalette, MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {

  @Input()
  backgroundColor?: ThemePalette;

  @Input()
  color?: ThemePalette;

  @Input()
  disableRipple: boolean;

  @Input()
  dynamicHeight: boolean;

  @Input()
  headerPostion: boolean;

  @Input()
  selectedIndex: number | null;

  @Input() tabList?: TabsConfig;

  @Input() navLinks?: TabsNavBarConfig;

  @Output()
  sqSelectedIndexChange: EventEmitter<number> = new EventEmitter;

  @Output()
  sqSelectedTabChange: EventEmitter<MatTabChangeEvent> = new EventEmitter;

  @Output()
  sqFocusChange: EventEmitter<MatTabChangeEvent> = new EventEmitter;

  selectedIndexChange(event) {
    this.sqSelectedIndexChange.emit(event);
  }

  selectedTabChange(event: MatTabChangeEvent) {
    this.sqSelectedTabChange.emit(event);
  }

  focusChange(event: MatTabChangeEvent) {
    this.sqFocusChange.emit(event);
  }
}
