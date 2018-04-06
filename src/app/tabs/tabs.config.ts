export interface TabsConfig {
    /**
     * Label to display for the tab
     */
    tabLabel?: string;

    isActive?: boolean;
    /**
     * Disables tab
     */
    disabled?: boolean;
    /**
     * doesn't work
     */
    disableRipple?: boolean;
    /**
     * doesn't work
     */
    position?: number | null;
    /**
     * Path for the routerModule
     */
    path?: string;
    /**
     * MatIcon class name
     */
    icon?: string;

    isVisible?: boolean;

}
