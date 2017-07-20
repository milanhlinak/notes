import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { QuickNoteService } from './shared/quick-note.service';
import { QuickNote } from './shared/quick-note.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.scss']
})
export class QuickNotesComponent implements OnInit, OnDestroy {

  @ViewChild('createModal') createModal: ModalDirective;

  private subscription: Subscription = null;
  result: QuickNote[] = null;
  loading = false;

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.quickNoteService.getQuickNotes()
      .subscribe(
      result => {
        this.loading = false;
        this.result = result;
      },
      error => {
        this.loading = false;
        this.result = null;
      }
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onNewClick() {
    this.createModal.show();
  }

  onDeleteQuickNote(quickNote: QuickNote) {
    this.loading = true;
    this.quickNoteService.deleteQuickNote(quickNote.id)
      .subscribe(
      next => {
        this.loading = false;
        this.result = next;
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
        this.result = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }


  hideCreateModal() {
    this.createModal.hide();
  }

  create() {

    const quickNote: QuickNote = { title: 'title', text: 'text' };

    this.createModal.hide();

    this.loading = true;
    this.quickNoteService.createQuickNote(quickNote)
      .subscribe(
      next => {
        this.loading = false;
        this.result = next;
      },
      errror => {
        this.loading = false;
      }
      );
  }

}
