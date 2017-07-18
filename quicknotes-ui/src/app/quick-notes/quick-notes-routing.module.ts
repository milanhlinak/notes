import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickNotesComponent } from './quick-notes.component';

const quickNotesRoutes: Routes = [
    { path: 'quicknotes', component: QuickNotesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(quickNotesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuickNotesRoutingModule { }
