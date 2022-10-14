import { Auth, Product, Category } from "./ds";

class DataService {
  get auth() {
    return new Auth();
  }

  get product() {
    return new Product();
  }

  get category() {
    return new Category();
  }
}

export default new DataService();
