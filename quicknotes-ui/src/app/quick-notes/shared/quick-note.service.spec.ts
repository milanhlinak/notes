import { TestBed, inject } from '@angular/core/testing';

import { QuickNoteService } from './quick-note.service';

describe('QuickNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickNoteService]
    });
  });

  it('should ...', inject([QuickNoteService], (service: QuickNoteService) => {
    expect(service).toBeTruthy();
  }));
});
