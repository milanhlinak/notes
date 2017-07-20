import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { QuickNoteService } from './shared/quick-note.service';
import { QuickNote } from './shared/quick-note.model';

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.scss']
})
export class QuickNotesComponent implements OnInit, OnDestroy {

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
    const title = 'Quick note ' + Math.random().toString(36).substring(7);
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
      + 'nisi ut aliquip ex ea commodo consequat.';
    const quickNote: QuickNote = { title: title, text: text };

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

  onDeleteQuickNote(id: number) {
    this.loading = true;
    this.quickNoteService.deleteQuickNote(id)
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
