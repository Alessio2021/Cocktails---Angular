import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../Service/drink.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cart: any[] = [];
  lista: any[] = [];

  constructor(private drinkService: DrinkService, public dialog: MatDialog) {}

  getAll() {
    this.drinkService.getAll().subscribe(
      (success: any) => {
        this.lista = success.drinks;
        // console.log(this.lista);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAll();
    this.getQuantity();
  }

  getQuantity() {
    let counter: number = 0;
    this.cart.forEach((element: any) => {
      counter += element.quantita;
    });
    return counter;
  }

  catchDrink(obj: any) {
    this.drinkService.pushCartService(obj)
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

  catchList(obj: any[]) {
    this.lista = [];
    this.lista = obj;
    // console.log(this.lista);
    // console.log(obj);
  }
}
