import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinkComponent } from './drink/drink.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegistraComponent } from './registra/registra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkComponent,
    CartShoppingComponent,
    DialogComponent,
    NavbarComponent,
    AccountComponent,
    LoginComponent,
    RegistraComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
