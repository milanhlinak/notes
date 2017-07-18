import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        NotFoundComponent
    ],
    providers: []
})
export class NotFoundModule { }
