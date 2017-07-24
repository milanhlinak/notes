import { NotesUiPage } from './app.po';

describe('notes-ui App', () => {
  let page: NotesUiPage;

  beforeEach(() => {
    page = new NotesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
