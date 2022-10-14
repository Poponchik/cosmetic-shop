import { authorizedAxios, unauthorizedAxios } from "../config";

export class Auth {
  private prefix;

  constructor() {
    this.prefix = "/auth";
  }

  async registration(name: string, email: string, password: string) {
    return unauthorizedAxios.post(`${this.prefix}/registration`, {
      name,
      email,
      password,
    });
  }

  async login(email: string, password: string) {
    return unauthorizedAxios.post(`${this.prefix}/login`, { email, password });
  }
}

export class Product {
  private prefix;

  constructor() {
    this.prefix = "/product";
  }

  async createProduct(
    categoryId: string,
    data
  ) {
    return authorizedAxios.post(`${this.prefix}/createProduct/${categoryId}`, data);
  }

  async getAllProducts() {
    return unauthorizedAxios.get(`${this.prefix}/productsAll`);
  }

  async getProduct(productId: string) {
    return unauthorizedAxios.get(`${this.prefix}/product/${productId}`);
  }

  async getCategoryProduct(categoryId: string) {
    return unauthorizedAxios.get(
      `${this.prefix}/productsCategory/${categoryId}`
    );
  }

  async deleteProduct(productId: string) {
    return authorizedAxios.delete(`${this.prefix}/deleteProduct/${productId}`);
  }

  async editProduct(
    productId: string,
    name: string,
    description: string,
    category: string,
    price: string,
    tags: Array<string>,
    images: Array<string>
  ) {
    return authorizedAxios.post(`${this.prefix}/changeProduct/${productId}`, {
      name,
      description,
      category,
      price,
      tags,
      images,
    });
  }
}

export class Category {
  private prefix;

  constructor() {
    this.prefix = "/category";
  }

  async createCategory(name: string) {
    return authorizedAxios.post(`${this.prefix}/createCategory`, { name });
  }

  async getCategories() {
    return authorizedAxios.get(`${this.prefix}/categoryAll`);
  }

  async deleteCategory(categoryId: string) {
    return authorizedAxios.delete(
      `${this.prefix}/deleteCategory/${categoryId}`
    );
  }

  async editCategory(categoryId: string){
    return authorizedAxios.post(`${this.prefix}/changeCategory/${categoryId}`)
  }
}
