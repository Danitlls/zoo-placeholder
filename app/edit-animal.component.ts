import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div id="updateForm" *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Edit brand:</label>
      <input [(ngModel)]="childSelectedAnimal.brand">
      <label>Edit Alcohol Content:</label>
      <input [(ngModel)]="childSelectedAnimal.alcoholContent">
      <label>Edit Pints Left in Animal:</label>
      <input [(ngModel)]="childSelectedAnimal.pints">

      <label>Edit age/pint:</label>
      <input [(ngModel)]="childSelectedAnimal.age">

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
