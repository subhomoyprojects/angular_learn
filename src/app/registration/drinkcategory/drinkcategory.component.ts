import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Its For Chip Tag
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// Its for Chip Tag end

@Component({
  selector: 'app-drinkcategory',
  templateUrl: './drinkcategory.component.html',
  styleUrls: ['./drinkcategory.component.css']
})
export class DrinkcategoryComponent implements OnInit {

  // Its for chip

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Beer'];
  allFruits: string[] = ['Whisky', 'Rum'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  
  // Its For Chip end


  constructor() {
    // Its For Chip

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    startWith(null),
    map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

      // Its For Chip end
   }

   // Its for Chip

   add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

   // Its For Chip


  ngOnInit() {
  }

}
