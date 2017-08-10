import { NgModule } from '@angular/core';
import { LocalizedDatePipe } from './localized-date.pipe';

@NgModule({
    declarations: [
        LocalizedDatePipe
    ],
    exports: [
        LocalizedDatePipe
    ]
})
export class PipesModule { }
