import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DrinkService } from '../Service/drink.service';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.css'],
})
export class CartShoppingComponent implements OnInit {
  cart: any[] = [];

  constructor(private drinkService: DrinkService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCart();
  }

  increment(cocktail: any): any {
    this.cart.forEach((element: any) => {
      if (cocktail.drink.idDrink === element.drink.idDrink) {
        element.quantita += 1;
      }
    });
  }

  getCart() {
    this.cart = this.drinkService.getCart();
  }

  decrement(cocktail: any): any {
    this.cart.forEach((element: any) => {
      if (cocktail.drink.idDrink === element.drink.idDrink) {
        if (element.quantita <= 1) {
          this.cart.splice(this.cart.indexOf(element), 1);
        } else {
          element.quantita -= 1;
        }
      }
    });
  }
  getQuantity() {
    let counter: number = 0;
    this.cart.forEach((element: any) => {
      counter += element.quantita;
    });
    return counter;
  }
  purchase() {
    this.dialog.open(DialogComponent);
    this.cart.forEach((element: any) => {
      this.cart.splice(element);
    });
  }
  delete() {
    this.cart.forEach((element: any) => {
      this.cart.splice(element);
    });
  }
}


