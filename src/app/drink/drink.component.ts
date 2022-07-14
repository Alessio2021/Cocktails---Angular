import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  faHeart = faHeart;
  @Input() lista: any;
  @Output() cocktail: EventEmitter<any> = new EventEmitter();

  constructor() {}

  add(drink:any) {
    this.cocktail.emit(drink);
    // console.log(drink);
  }

  ngOnInit(): void {}
}
