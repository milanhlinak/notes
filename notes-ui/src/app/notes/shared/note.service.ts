import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { Note } from './note.model';

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  getNotes(): Observable<Note[]> {
    return this.http.get('/api/notes')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get('/api/notes/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createNote(note: Note): Observable<Note[]> {
    return this.http.post('/api/notes', note)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateNote(id: number, note: Note): Observable<Note[]> {
    return this.http.put('/api/notes/' + id, note)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteNote(id: number): Observable<Note[]> {
    return this.http.delete('/api/notes/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
