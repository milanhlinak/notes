import { NgModule } from '@angular/core';

import { LocalizedDatePipe } from './localized-date.pipe';

const PIPES = [
    LocalizedDatePipe
];

@NgModule({
    imports: [],
    declarations: [...PIPES],
    providers: [],
    exports: [...PIPES]
})
export class PipesModule {
}
