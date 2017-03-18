import { NgPanesPage } from './app.po';

describe('ng-panes App', () => {
  let page: NgPanesPage;

  beforeEach(() => {
    page = new NgPanesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngp works!');
  });
});
