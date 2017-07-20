import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { QuickNote } from '../shared/quick-note.model';
import { QuickNoteService } from '../shared/quick-note.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.scss']
})
export class QuickNoteComponent implements OnInit {

  @ViewChild('editModal') editModal: ModalDirective;
  @ViewChild('deleteModal') deleteModal: ModalDirective;
  @Input() quickNote: QuickNote;
  @Input() loading: boolean;
  @Output() deleteQuickNote = new EventEmitter<QuickNote>();
  @Output() editQuickNote = new EventEmitter<QuickNote>();

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
  }

  onEditClick() {
    console.log('on edit quick note %d click', this.quickNote.id);
    this.editModal.show();
  }

  onDeleteClick() {
    console.log('on delete quick note %d click', this.quickNote.id);
    this.deleteModal.show();
  }

  hideEditModal() {
    this.editModal.hide();
  }

  hideDeleteModal() {
    this.deleteModal.hide();
  }

  delete() {
    this.deleteQuickNote.emit(this.quickNote);
  }

  edit() {
    this.editQuickNote.emit(this.quickNote);
  }

}
