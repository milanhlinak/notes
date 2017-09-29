import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NoteService } from './shared/note.service';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note/note.component';

@NgModule({
    imports: [
        SharedModule,
        ModalModule,
        NotesRoutingModule
    ],
    declarations: [
        NotesComponent,
        NoteComponent
    ],
    providers: [
        NoteService
    ]
})
export class NotesModule { }
