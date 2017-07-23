import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('editForm') editForm: NgForm;
  @ViewChild('deleteModal') deleteModal: ModalDirective;
  @Input() quickNote: QuickNote;
  @Input() loading: boolean;
  @Output() deleteQuickNote = new EventEmitter<QuickNote>();
  @Output() editQuickNote = new EventEmitter<QuickNote>();

  editedQuickNote: QuickNote;

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
    this.editedQuickNote = { id: this.quickNote.id, title: this.quickNote.title, text: this.quickNote.text };
  }

  onEditClick() {
    console.log('on edit quick note %d click', this.quickNote.id);
    this.editedQuickNote = { id: this.quickNote.id, title: this.quickNote.title, text: this.quickNote.text };
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

  onEditSubmit() {
    this.editQuickNote.emit(this.editedQuickNote);
  }

}
