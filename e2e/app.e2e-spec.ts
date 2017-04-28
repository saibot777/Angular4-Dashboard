import { ReplacePage } from './app.po';

describe('replace App', () => {
  let page: ReplacePage;

  beforeEach(() => {
    page = new ReplacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
