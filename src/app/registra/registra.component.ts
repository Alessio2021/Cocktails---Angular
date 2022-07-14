import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.css'],
})
export class RegistraComponent implements OnInit {
  form: FormGroup;



  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      surname: this.fb.control(''),
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let account: Account = {
        name: this.form.get('name')?.value,
        surname: this.form.get('surname')?.value,
        email: this.form.get('email')?.value,
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value,
      };
      this.accountService.registra(account);
      this.router.navigateByUrl('login');
    }
  }

  ngOnInit(): void {}
}
