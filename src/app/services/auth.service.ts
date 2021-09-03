import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth:boolean = false;

  constructor() { }


  isAuthFunction(){
      return this.isAuth;
      console.log("isAuthFunction", this.isAuth);
  }


  setAuth(auth:boolean){
    this.isAuth = auth;
    console.log("setAuth", this.isAuth);
  }
}

