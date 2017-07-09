import { ProjectDarkNightPage } from './app.po';

describe('project-dark-night App', function() {
  let page: ProjectDarkNightPage;

  beforeEach(() => {
    page = new ProjectDarkNightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
