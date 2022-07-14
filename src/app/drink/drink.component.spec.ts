import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkComponent } from './drink.component';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

describe('DrinkComponent', () => {
  let component: DrinkComponent;
  let fixture: ComponentFixture<DrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
