import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        NotFoundComponent
    ],
    providers: []
})
export class NotFoundModule { }
