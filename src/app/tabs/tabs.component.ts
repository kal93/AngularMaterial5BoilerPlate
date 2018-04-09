import { Component, Input , OnInit, Output, EventEmitter } from '@angular/core';
import { TabsConfig, TabsNavBarConfig } from './tabs.config';
import { ThemePalette, MatTabChangeEvent, MatTabHeaderPosition } from '@angular/material';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {
  /**
   * Background color of the tab group.
   */
  @Input()
  backgroundColor?: ThemePalette;
  /**
   * Theme color palette for the component.
   */
  @Input()
  color?: ThemePalette;
  /**
   * Disables the ripple effects for the whole tab group.
   */
  @Input()
  disableRipple: boolean;

  // verify
  @Input()
  dynamicHeight: boolean;

  /**
   * Specifies the header postion of the tabs.Accepts two values `above` & `below`.
   */
  @Input()
  headerPosition: MatTabHeaderPosition;
  
  /**
   * Sets the active tab.
   */
  @Input()
  selectedIndex: number | null;

  @Input() tabList?: TabsConfig;

  @Input() navLinks?: TabsNavBarConfig;

  /**
   * Event emitted when active tab changes
   */
  @Output()
  sqSelectedIndexChange: EventEmitter<number> = new EventEmitter;
  /**
   * Event emitted when active tab changes.
   */
  @Output()
  sqSelectedTabChange: EventEmitter<MatTabChangeEvent> = new EventEmitter;
  /**
   * Event emitted when focus is put on any of the tab labels in the header,
   * usually through keyboard navigation.
   */
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
