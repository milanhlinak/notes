import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuickNote } from '../shared/quick-note.model';
import { QuickNoteService } from '../shared/quick-note.service';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.scss']
})
export class QuickNoteComponent implements OnInit {

  @Input() quickNote: QuickNote;
  @Output() deleteQuickNote = new EventEmitter<number>();

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
  }

  onEditClick() {
    console.log('on edit quick note %d click', this.quickNote.id);
  }

  onDeleteClick() {
    console.log('on delete quick note %d click', this.quickNote.id);
    this.deleteQuickNote.emit(this.quickNote.id);
  }

}
