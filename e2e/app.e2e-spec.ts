import { FakeWhatchaPage } from './app.po';

describe('fake-whatcha App', function() {
  let page: FakeWhatchaPage;

  beforeEach(() => {
    page = new FakeWhatchaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
