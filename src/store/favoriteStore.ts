import { makeAutoObservable } from "mobx";

class FavoriteStore {
  favorites: Set<number> = new Set();

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  toggleFavorite(id: number) {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
    this.saveToLocalStorage();
  }

  hasItem(id: number): boolean {
    return this.favorites.has(id);
  }

  private loadFromLocalStorage() {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      this.favorites = new Set(JSON.parse(saved));
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem("favorites", JSON.stringify([...this.favorites]));
  }
}

export const favoriteStore = new FavoriteStore();
