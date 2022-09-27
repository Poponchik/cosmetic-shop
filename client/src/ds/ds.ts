import axios from "axios";
import { authorizedAxios, unauthorizedAxios } from "../config";

export class Auth {
  private prefix;

  constructor() {
    this.prefix = "/auth";
  }

  async registration(name: string, email: string, password: string) {
    return unauthorizedAxios.post(`${this.prefix}/registration`, { name, email, password });
  }

  async login(email: string, password: string) {
    return unauthorizedAxios.post(`${this.prefix}/login`, { email, password });
  }
}
