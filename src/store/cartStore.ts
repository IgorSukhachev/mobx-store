import { makeAutoObservable } from "mobx";
import { productsStore } from "./productsStore";

class CartStore {
  items: Set<number> = new Set();

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  toggleItem(id: number) {
    if (this.items.has(id)) {
      this.items.delete(id);
    } else {
      this.items.add(id);
    }
    this.saveToLocalStorage();
  }

  hasItem(id: number) {
    return this.items.has(id);
  }

  get totalAmount() {
    let total = 0;
    this.items.forEach((id) => {
      const product = productsStore.products.find((p) => p.id === id);
      if (product) {
        total += product?.price;
      }
    });
    return total;
  }

  private loadFromLocalStorage() {
    const saved = localStorage.getItem("cartItem");
    if (saved) {
      this.items = new Set(JSON.parse(saved));
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem("cartItem", JSON.stringify([...this.items]));
  }
}

export const cartStore = new CartStore();
