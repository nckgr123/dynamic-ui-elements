class DropdownMenu {
  constructor(menuNode) {
    this._menu = menuNode;
    this._menuHeading = this._menu.querySelector(".dropdown-menu-title");
    this._menuItems = this._menu.querySelector(".dropdown-item-container");
    // duplicated to prevent dropdownbeing visible when opening page
    this._menuItems.classList.add("d-none-items");
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
    setTimeout(() => this._menuItems.classList.add("d-none-items"), 500);
  }
  showItems() {
    this._showingItems = true;
    this._menuItems.classList.remove("d-none-items");
    setTimeout(() => this._menuItems.classList.remove("hide-items"), 1);
  }
}

const initDropdownMenus = () => {
  const menus = document.querySelectorAll(".dropdown-menu");
  menus.forEach((menuNode) => {
    new DropdownMenu(menuNode);
  });
};

export default initDropdownMenus;
