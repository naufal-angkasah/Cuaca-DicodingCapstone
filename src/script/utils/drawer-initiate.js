const DrawerInitiate = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._drawerToggle(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._drawerClose(event, navbar);
    });
  },

  _drawerToggle(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('open');
  },

  _drawerClose(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('open');
  },
};

export default DrawerInitiate;
