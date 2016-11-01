import { Quickstart1Page } from './app.po';

describe('quickstart-1 App', function() {
  let page: Quickstart1Page;

  beforeEach(() => {
    page = new Quickstart1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
