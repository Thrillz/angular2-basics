import { ScotchPage } from './app.po';

describe('scotch App', () => {
  let page: ScotchPage;

  beforeEach(() => {
    page = new ScotchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
