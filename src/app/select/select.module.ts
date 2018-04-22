import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

// import { SqErrorModule } from '../error/error.module';
import { SelectComponent } from './select.component';
import { SelectSettingsModel } from './select-settings.model';

export { SelectComponent } from './select.component';
export { SelectSettingsModel } from './select-settings.model';
/**
 * @hidden
 */
@NgModule({
    declarations: [SelectComponent],
    imports: [
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,

        // SqErrorModule
    ],
    exports: [SelectComponent]
})
export class SelectModule { }
