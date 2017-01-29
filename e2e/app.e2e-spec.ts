import { ClodinaryAngular2GalleryPage } from './app.po';

describe('clodinary-angular2-gallery App', function() {
  let page: ClodinaryAngular2GalleryPage;

  beforeEach(() => {
    page = new ClodinaryAngular2GalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
