import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(username: string, password: string) {
    return this.http.post("http://localhost:8529/_db/_system/token/signup", {
      username: username,
      password: password
    });
  }

  login(username: string, password: string) {
    return this.http.post("http://localhost:8529/_db/_system/token/login", {
      username: username,
      password: password
    });
  }
}
