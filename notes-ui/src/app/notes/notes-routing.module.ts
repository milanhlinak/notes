import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

const notesRoutes: Routes = [
    { path: 'notes', component: NotesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(notesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NotesRoutingModule { }
