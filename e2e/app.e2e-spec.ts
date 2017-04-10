import { StorydramPage } from './app.po';

describe('storydram App', () => {
  let page: StorydramPage;

  beforeEach(() => {
    page = new StorydramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
