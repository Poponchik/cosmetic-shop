import { Auth, Product, Category, Order } from "./ds";

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

  get order() {
    return new Order()
  }
}

export default new DataService();
