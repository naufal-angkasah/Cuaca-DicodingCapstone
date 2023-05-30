import DrawerInitiate from '../utils/drawer-initiate';
import UrlParser from '../routes/url-parser';
import route from '../routes/route';

class DrawerApp {
  constructor({ button, navbar, content }) {
    this._button = button;
    this._navbar = navbar;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiate.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = route[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default DrawerApp;
