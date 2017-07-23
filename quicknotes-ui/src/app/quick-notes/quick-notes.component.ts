import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { QuickNoteService } from './shared/quick-note.service';
import { QuickNote } from './shared/quick-note.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.scss']
})
export class QuickNotesComponent implements OnInit, OnDestroy {

  @ViewChild('createModal') createModal: ModalDirective;
  @ViewChild('createForm') createForm: NgForm;

  private subscription: Subscription = null;
  quickNote: QuickNote = { title: '', text: '' };
  quickNotes: QuickNote[] = null;
  loading = false;

  constructor(private quickNoteService: QuickNoteService, private translateService: TranslateService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.quickNoteService.getQuickNotes()
      .subscribe(
      next => {
        this.loading = false;
        this.quickNotes = next;
      },
      error => {
        this.loading = false;
        this.quickNotes = null;
      }
      );
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

  onDeleteQuickNote(quickNote: QuickNote) {
    this.loading = true;
    this.quickNoteService.deleteQuickNote(quickNote.id)
      .subscribe(
      next => {
        this.loading = false;
        this.quickNotes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

  onEditQuickNote(quickNote: QuickNote) {
    this.loading = true;
    this.quickNoteService.updateQuickNote(quickNote.id, quickNote)
      .subscribe(
      next => {
        this.loading = false;
        this.quickNotes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }


  hideCreateModal() {
    this.createModal.hide();
    this.translateService.use('cs');
  }

  onCreateSubmit() {

    this.createModal.hide();

    this.loading = true;
    this.quickNoteService.createQuickNote(this.quickNote)
      .subscribe(
      next => {
        this.loading = false;
        this.quickNotes = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

}
