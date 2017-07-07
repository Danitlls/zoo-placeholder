import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
// import { ages } from './ages.model';

@Component({
  selector: 'patron-animal-list',
  template: `
  <div *ngIf="showHappy">
    <button id="show-happy" (click)="happyHour()">VIEW Extras</button>
    <br>
    <h4>normal view</h4>
  </div>
  <div *ngIf="showRegular">
    <button id="show-not-happy" (click)="regularHour()">VIEW Normal</button>
    <br>
    <h4>Vew extras</h4>
  </div>
  <br>
    <select (change)="onAgeChange($event.target.value)">
      <option value="allAges" selected="selected">
    All Ages</option>
      <option *ngFor="let age of ages" value="{{age.value}}">
      {{age.display}}</option>
    </select>

    <h3>{{childAnimalList[0].species}}, {{childAnimalList[0].name}}, Age: {{childAnimalList[0].age}}</h3>
    <h3>{{childAnimalList[1].species}}, {{childAnimalList[1].name}}, Age: {{childAnimalList[1].age}}</h3>


    <ul>
      <li [class]="AgeColor(currentAnimal)" (click)="editAnimal(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
    </ul>
    <hr>
  `
})

export class PatronAnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  showHappy: boolean = true;
  showRegular: boolean = false;

  ages = [
    { value: 2, display: 'Young'},
    { value: 5, display: 'Mature'},
    { value: 8, display: 'Old'},
  ];

  filterByAge: string = "allAges";

  onAgeChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  ageColor(currentAnimal){
    if (currentAnimal.age >= 8){
      return "bg-danger";
    } else if (currentAnimal.age >= 5) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  strong(currentAnimal){
    if(currentAnimal.sex === "Female"){
      return "strong";
    }
  }

  // isAlmostEmpty(clickedAnimal: Animal) {
  //   if(clickedAnimal.age <= 2) {
  //     return "bg-danger";
  //   }
  // }

  happyHour(currentAnimal) {
    this.showHappy = false;
    this.showRegular = true;
    for (var animal in this.childAnimalList) {
      this.childAnimalList[animal].age -= 1;
    }
  }
  //
  regularHour(animals) {
    this.showHappy = true;
    this.showRegular = false;
    for (var animal in this.childAnimalList) {
      this.childAnimalList[animal].age += 1;
    }
  }

}
