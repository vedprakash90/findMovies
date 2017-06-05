import { FindMoviesPage } from './app.po';

describe('find-movies App', () => {
  let page: FindMoviesPage;

  beforeEach(() => {
    page = new FindMoviesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
