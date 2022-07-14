import { Injectable } from '@angular/core';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  isLogged: boolean = false;
  account!: Account;
  accountList: Account[] = [
    {
      username: 'admin',
      password: 'admin'
    }
  ];

  constructor() {}

  registra(input: Account) {
    this.accountList.push(input);
    // console.log(this.account);
  }

  getList() {
    return this.accountList;
  }

  login(input: Account) {
    this.accountList.forEach((element: Account) => {
      if (
        element.username === input.username && element.password === input.password) {
        this.isLogged = true;
        this.account = element;
      }
    });
    return this.account;
  }

  logoutService(){
    this.isLogged = false;
    this.account = {};
    console.log(this.account);

  }
}
