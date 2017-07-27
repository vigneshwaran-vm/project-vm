import { ProjectVmPage } from './app.po';

describe('project-vm App', () => {
  let page: ProjectVmPage;

  beforeEach(() => {
    page = new ProjectVmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
