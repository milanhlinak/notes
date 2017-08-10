import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NoteService } from './shared/note.service';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note/note.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        TranslateModule,
        NotesRoutingModule,
        ModalModule
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
