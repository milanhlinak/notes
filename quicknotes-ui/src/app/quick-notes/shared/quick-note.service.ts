import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { QuickNote } from './quick-note.model';

@Injectable()
export class QuickNoteService {

  constructor(private http: Http) { }

  getQuickNotes(): Observable<QuickNote[]> {
    return this.http.get('/api/quicknotes')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getQuickNote(id: number): Observable<QuickNote> {
    return this.http.get('/api/quicknotes/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createQuickNote(quickNote: QuickNote): Observable<QuickNote[]> {
    return this.http.post('/api/quicknotes', quickNote).delay(500000)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateQuickNote(id: number, quickNote: QuickNote): Observable<QuickNote[]> {
    return this.http.put('/api/quicknotes/' + id, quickNote)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteQuickNote(id: number): Observable<QuickNote[]> {
    return this.http.delete('/api/quicknotes/' + id)
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
