import { PawProjektPage } from './app.po';

describe('paw-projekt App', () => {
  let page: PawProjektPage;

  beforeEach(() => {
    page = new PawProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
