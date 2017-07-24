import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService]
    });
  });

  it('should ...', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
