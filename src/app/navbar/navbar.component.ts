import { AccountService } from './../Service/account.service';
import { Component, OnInit } from '@angular/core';
import {
  faMartiniGlassCitrus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faMartiniGlassCitrus = faMartiniGlassCitrus;
  faCartShopping = faCartShopping;
  faUser = faUser;
  constructor(public accountService: AccountService, private route:Router) {}

  logout() {
    this.accountService.logoutService()
    this.route.navigateByUrl('login')
  }

  ngOnInit(): void {}
}
