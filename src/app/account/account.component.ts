import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  accountList: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountList = this.accountService.getList()
  }
}
