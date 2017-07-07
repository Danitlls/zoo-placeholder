import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  styleUrls: ['resources/styles/main.scss'],

  template: `
  <section class="center">
    <h1>Zoo App</h1>
    <h3>Current Animals:</h3>
    <div id="patron-portal" *ngIf="patronPortal">
    <patron-animal-list [childAnimalList]="masterAnimalList"></patron-animal-list>
    <button (click)="showEmployeePortal()" id="show-employee" >Show Edition Portal</button>
    </div>

    <div id="employee-portal" *ngIf="employeePortal">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <button (click)="showPatronPortal()" id="show-patron" >Show Patron Portal</button>
    </div>
  </section>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;
  newAnimalForm: boolean = false;
  employeePortal: boolean = false;
  patronPortal: boolean = true;

  masterAnimalList: Animal[] = [
    new Animal('Leon' , 'Jack' , 2 , 'Carnivore' , 'Northern Trail' , 5 , 'Male' , 'Cool shade' , 'Loud noises' ),
    new Animal('Leon' , 'Lila' , 2 , 'Carnivore' , 'Northern Trail' , 1 , 'Female' , 'Playing with ropes' , 'Loud noises' ),

    // Species: "Arctic Fox"
    // Name: "Moon"
    // Age: 2
    // Diet: "Carnivore"
    // Location: "Northern Trail"
    // Caretakers: 5
    // Sex: "Female"
    // Likes: "Cool shade"
    // Dislikes: "Loud noises"

  ];

  finishedEditing() {
      this.selectedAnimal = null;
    }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild)
  }

  showEmployeePortal() {
    this.employeePortal = true;
    this.patronPortal = false;
  }

  showPatronPortal() {
    this.employeePortal = false;
    this.patronPortal = true;
  }

  showNewAnimalForm() {
    this.newAnimalForm = true;
  }
}
