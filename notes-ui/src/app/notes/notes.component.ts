import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { NoteService } from './shared/note.service';
import { Note } from './shared/note.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {

  @ViewChild('createModal') createModal: ModalDirective;
  @ViewChild('createForm') createForm: NgForm;

  private subscription: Subscription = null;
  note: Note = { title: '', text: '' };
  notes: Note[] = null;
  loading = false;
  selectedLanguage = 'cs';

  constructor(private noteService: NoteService, private translateService: TranslateService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.noteService.getNotes()
      .subscribe(
      next => {
        this.loading = false;
        this.notes = next;
      },
      error => {
        this.loading = false;
        this.notes = null;
      }
      );

    this.changeSelectedLanguage(localStorage.getItem('selectedLanguage') || 'en');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onNewClick() {
    this.createForm.reset();
    this.createModal.show();
  }

  onDeleteNote(note: Note) {
    this.loading = true;
    this.noteService.deleteNote(note.id)
      .subscribe(
      next => {
        this.loading = false;
        this.notes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

  onEditNote(note: Note) {
    this.loading = true;
    this.noteService.updateNote(note.id, note)
      .subscribe(
      next => {
        this.loading = false;
        this.notes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

  hideCreateModal() {
    this.createModal.hide();
  }

  onCreateSubmit() {

    this.createModal.hide();

    this.loading = true;
    this.noteService.createNote(this.note)
      .subscribe(
      next => {
        this.loading = false;
        this.notes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

  changeSelectedLanguage(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    this.translateService.use(language);
  }

}
