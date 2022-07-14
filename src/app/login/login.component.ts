import { AccountService } from './../Service/account.service';
import { Account } from './../model/account';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error!:string;

  constructor(private router: Router, private fb: FormBuilder, private accountService: AccountService) {
    this.form = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let account: Account = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value
      };
      let bool = this.accountService.login(account)
      if (bool != null && bool != undefined) {
        this.router.navigateByUrl('home')
        console.log(bool, "if");
      } else {
        this.error = "email o password errati"
        console.log(bool, "else");
      }
    }
  }

  ngOnInit(): void {}
}
