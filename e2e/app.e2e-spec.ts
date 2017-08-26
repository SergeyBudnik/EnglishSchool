import { EnglishSchoolPage } from './app.po';

describe('english-school App', () => {
  let page: EnglishSchoolPage;

  beforeEach(() => {
    page = new EnglishSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
