
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DrinkService } from '../Service/drink.service';
import {
  faMagnifyingGlass,
  faMartiniGlass,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private drinkService: DrinkService) {}
  faMagnifyingGlass = faMagnifyingGlass;
  faMartiniGlass = faMartiniGlass;
  @Output() listFiltered: EventEmitter<any> = new EventEmitter();

  listaFilter: any[] = [];
  lista: any[] = [];
  value: string = '';
  valueRadio: string = '';
  searchValue: string = '';

  getCategory(input: string) {
    this.drinkService.getCategory(input).subscribe(
      (success: any) => {
        this.listaFilter = success.drinks;
        this.listFiltered.emit(this.listaFilter);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAll() {
    let list = [];
    this.drinkService.getAll().subscribe(
      (success: any) => {
        list = success.drinks;
        list.forEach((element: any) => {
          if (!this.lista.includes(element.strCategory)) {
            this.lista.push(element.strCategory);
            // console.log(this.lista);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAlcholic(input: string) {
    console.log(input);
    if (input === 'Analcholic') {
      this.drinkService.getAnalcholic().subscribe(
        (success: any) => {
          this.listaFilter = success.drinks;
          this.listFiltered.emit(this.listaFilter);
          console.log(success);
          console.log(this.valueRadio);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.drinkService.getAlcholic().subscribe(
        (success: any) => {
          this.listaFilter = success.drinks;
          this.listFiltered.emit(this.listaFilter);
          console.log(success);
          console.log(this.valueRadio);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getRandom() {
    this.drinkService.getRandom().subscribe(
      (success: any) => {
        this.listaFilter = success.drinks;
        this.listFiltered.emit(this.listaFilter);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getByNome(input: string) {
    console.log(input);
    this.drinkService.getByNome(input).subscribe(
      (success: any) => {
        this.listaFilter = success.drinks;
        this.listFiltered.emit(this.listaFilter);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getByIngredient(input: string) {
    console.log(input);
    this.drinkService.getByIngredient(input).subscribe(
      (success: any) => {
        this.listaFilter = success.drinks;
        this.listFiltered.emit(this.listaFilter);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getAll();
  }
}
