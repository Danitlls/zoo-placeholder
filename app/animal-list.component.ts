import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
// import { styles } from './styles.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="AgeColor(currentAnimal)" (click)="editAnimal(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  ageColor(currentAnimal){
    if (currentAnimal.age >= 8){
      return "bg-danger";
    } else if (currentAnimal.age >= 6) {
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

}
