import { Component, Input , OnInit } from '@angular/core';
import { TabsConfig } from './tabs.config';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabs: TabsConfig[];
  constructor() { }

  ngOnInit() {
  }

}
