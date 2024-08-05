import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) {
    // Call our backend API

    localStorage.setItem("token", Math.random() + "");
  }

  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
