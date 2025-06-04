import { makeAutoObservable } from "mobx";

class CartStore {
  items: Set<number> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  toggleItem(id: number) {
    if (this.items.has(id)) {
      this.items.delete(id);
    } else {
      this.items.add(id);
    }
  }

  hasItem(id: number) {
    return this.items.has(id);
  }
}

export const cartStore = new CartStore();
