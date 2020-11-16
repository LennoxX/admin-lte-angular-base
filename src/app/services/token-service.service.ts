import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  storeToken(token: string) {
    sessionStorage.setItem("token", "Bearer " + token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem("token");
  }
}