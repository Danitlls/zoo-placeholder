import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <button (click)="showNewAnimalForm()" *ngIf="newAnimalButton">Add a New Animal</button>
    <div id="form" *ngIf="newAnimalForm">
    <h2>New Animal</h2>
      <h3>Add a New Animal</h3>

      <label>Species:</label>
      <input #newSpecies>

      <label>Name:</label>
      <input #newName>

      <label>Age:</label>
      <input #newAge>

      <label>Diet:</label>
      <input #newDiet>

      <label>Locationt:</label>
      <input #newLocationt>

      <label>Caretake:</label>
      <input #newCaretakers>

      <label>Sex:</label>
      <input #newSex>

      <label>Likes:</label>
      <input #newLikes>

      <label>Dislikes:</label>
      <input #newDislikes>



    <!-- <label>Style:</label>
      <select #newStyle>
        <option *ngFor="let style of styles" value="{{style.value}}">
        {{style.display}}</option>
      </select>
      <br> -->
      <button (click)="submitNewAnimalForm(newSpecies.value, newName.value, neeAge.value, newDiet.value, newLocation.value, newCaretakers, newSex.value, newLikes.value, newDislikes.value)" (click)="hideNewAnimalForm()">Submit</button>
    </div>
  `
})


export class NewAnimalComponent {
  newAnimalForm: boolean = false;
  newAnimalButton: boolean = true;
  @Output() newAnimalSender = new EventEmitter();
  // styles = [
  //   { value: 'Amber Ale', display: 'Amber Ale'},
  //   { value: 'Barleywine', display: 'Barleywine'},
  //   { value: 'Belgian Wit', display: 'Belgian Wit'},
  //   { value: 'Brown', display: 'Brown'},
  //   { value: 'Cider', display: 'Cider'},
  //   { value: 'Double IPA', display: 'Double IPA'},
  //   { value: 'Hefeweizen', display: 'Hefeweizen'},
  //   { value: 'IPA', display: 'IPA'},
  //   { value: 'Lager', display: 'Lager'},
  //   { value: 'Pale Ale', display: 'Pale Ale'},
  //   { value: 'Porter', display: 'Porter'},
  //   { value: 'Pilsner', display: 'Pilsner'},
  //   { value: 'Red Ale', display: 'Red Ale'},
  //   { value: 'Saison', display: 'Saison'},
  //   { value: 'Sour Ale', display: 'Sour Ale'},
  //   { value: 'Stout', display: 'Stout'},
  //   { value: 'Wheat', display: 'Wheat'},
  // ];

  // Species: "Arctic Fox"
  // Name: "Moon"
  // Age: 2
  // Diet: "Carnivore"
  // Location: "Northern Trail"
  // Caretakers: 5
  // Sex: "Female"
  // Likes: "Cool shade"
  // Dislikes: "Loud noises"

  submitNewAnimalForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, displikes: string) {

    var newAnimal = new Animal(species,  name,  age,  diet,  location,  caretakers,  sex,  likes,  displikes);
    this.newAnimalSender.emit(newAnimal);
    this.newAnimalButton = true;
  }

  hideNewAnimalForm() {
    this.newAnimalForm = false;
  }

  showNewAnimalForm() {
    this.newAnimalForm = true;
    this.newAnimalButton = false;
  }
}
