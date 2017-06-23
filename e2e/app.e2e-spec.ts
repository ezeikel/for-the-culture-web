import { ForTheCultureWebPage } from './app.po';

describe('for-the-culture-web App', () => {
  let page: ForTheCultureWebPage;

  beforeEach(() => {
    page = new ForTheCultureWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
