import { makeAutoObservable } from "mobx";
import { fetchProducts } from "../shared/api/products";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  model: string;
}

class ProductsStore {
  products: IProduct[] = [];
  loading = false;
  error: string | null = null;
  searchQuery = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query: string) {
    this.searchQuery = query.toLowerCase();
  }

  get filteredProducts() {
    if (!this.searchQuery) return this.products;
    return this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchQuery),
    );
  }

  async loadProducts() {
    this.loading = true;
    this.error = null;
    try {
      const data = await fetchProducts();
      this.products = data.products || data;
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Unknown error";
    } finally {
      this.loading = false;
    }
  }
}

export const productsStore = new ProductsStore();
