import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  cart: any[] = [];
  constructor(private http: HttpClient) {}

  getCart() {
    return this.cart;
  }

  pushCartService(obj: any) {
    let bool: boolean = false;

    this.cart.forEach((element) => {
      if (obj.idDrink == element.drink.idDrink) {
        element.quantita += 1;
        bool = true;
      }
    });
    if (!bool) {
      this.cart.push({
        drink: obj,
        quantita: 1,
      });
    }
    console.log(this.cart);

  }

  getAll() {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/search.php?f=a'
    );
  }

  getCategory(input: string) {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/filter.php?c=' + input
    );
  }

  getAlcholic() {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    );
  }

  getAnalcholic() {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
  }

  getRandom() {
    return this.http.get('https://thecocktaildb.com/api/json/v1/1/random.php');
  }

  getByNome(input: string) {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/search.php?s=' + input
    );
  }
  getByIngredient(input: string) {
    return this.http.get(
      'https://thecocktaildb.com/api/json/v1/1/filter.php?i=' + input
    );
  }
}
