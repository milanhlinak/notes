import { Component, OnInit, Input } from '@angular/core';
import { QuickNote } from '../shared/quick-note.model';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.scss']
})
export class QuickNoteComponent implements OnInit {

  @Input() quickNote: QuickNote;

  constructor() { }

  ngOnInit() {
  }

}
