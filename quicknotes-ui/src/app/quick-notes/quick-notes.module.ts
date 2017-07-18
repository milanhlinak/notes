import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { QuickNoteService } from './shared/quick-note.service';
import { QuickNotesRoutingModule } from './quick-notes-routing.module';
import { QuickNotesComponent } from './quick-notes.component';
import { QuickNoteComponent } from './quick-note/quick-note.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        QuickNotesRoutingModule
    ],
    declarations: [
        QuickNotesComponent,
        QuickNoteComponent
    ],
    providers: [
        QuickNoteService
    ]
})
export class QuickNotesModule { }