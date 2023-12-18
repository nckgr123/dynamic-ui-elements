class DropdownMenu {
  constructor(menuNode) {
    this._menu = menuNode;
    this._menuHeading = this._menu.querySelector(".dropdown-menu-title");
    this._menuItems = this._menu.querySelector(".dropdown-item-container");
    this.hideItems();
    this._menuHeading.addEventListener("click", () =>
      this.toggleItemsVisibility()
    );
  }
  toggleItemsVisibility() {
    if (this._showingItems) {
      this.hideItems();
    } else {
      this.showItems();
    }
  }
  hideItems() {
    this._showingItems = false;
    this._menuItems.classList.add("hide-items");
  }
  showItems() {
    this._showingItems = true;
    this._menuItems.classList.remove("hide-items");
  }
}

const initDropdownMenus = () => {
  const menus = document.querySelectorAll(".dropdown-menu");
  menus.forEach((menuNode) => {
    new DropdownMenu(menuNode);
  });
};

export default initDropdownMenus;
