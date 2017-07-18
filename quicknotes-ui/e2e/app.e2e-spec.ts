import { QuicknotesUiPage } from './app.po';

describe('quicknotes-ui App', () => {
  let page: QuicknotesUiPage;

  beforeEach(() => {
    page = new QuicknotesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
