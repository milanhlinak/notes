import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

const MODULES = [
    CommonModule,
    FormsModule,
    TranslateModule,
    PipesModule,
    DirectivesModule
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [],
    exports: [
        ...MODULES
    ],
    providers: [],
})
export class SharedModule {
}
