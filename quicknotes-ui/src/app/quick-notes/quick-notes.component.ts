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

}
