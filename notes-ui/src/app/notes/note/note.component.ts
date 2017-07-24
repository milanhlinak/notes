import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @ViewChild('editModal') editModal: ModalDirective;
  @ViewChild('editForm') editForm: NgForm;
  @ViewChild('deleteModal') deleteModal: ModalDirective;
  @Input() note: Note;
  @Input() loading: boolean;
  @Output() deleteNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();

  editedNote: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.editedNote = { id: this.note.id, title: this.note.title, text: this.note.text };
  }

  onEditClick() {
    console.log('on edit note %d click', this.note.id);
    this.editedNote = { id: this.note.id, title: this.note.title, text: this.note.text };
    this.editModal.show();
  }

  onDeleteClick() {
    console.log('on delete note %d click', this.note.id);
    this.deleteModal.show();
  }

  hideEditModal() {
    this.editModal.hide();
  }

  hideDeleteModal() {
    this.deleteModal.hide();
  }

  delete() {
    this.deleteNote.emit(this.note);
  }

  onEditSubmit() {
    this.editNote.emit(this.editedNote);
  }

}
