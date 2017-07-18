import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNoteComponent } from './quick-note.component';

describe('QuickNoteComponent', () => {
  let component: QuickNoteComponent;
  let fixture: ComponentFixture<QuickNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
