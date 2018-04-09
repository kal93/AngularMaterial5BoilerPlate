import { MatTabLabel } from '@angular/material';
import { TemplateRef } from '@angular/core';

export interface TabsConfig {

    disabled?: boolean;

    label?: string;

    position?: number | null;

    isActive?: boolean;

    origin?: number | null;

    /**
     * Content for the tab label given by <ng-template mat-tab-label>.
     * Don't include this for now.
     */
    // templateLabel?: MatTabLabel;
    /**
     *  Defines the template/view for tabs
     */
    TabView?: any;
    /**
     * Specifies the MatIcon class for the icon to display
     */
    icon?: string;

}


export interface TabsNavBarConfig {
    /**
     * Label to display for the tab
     */
    tabLabel?: string;

    /**
     * Path for the routerModule
     */
    path?: string;
    /**
     * MatIcon class name
     */
    icon?: string;

}
