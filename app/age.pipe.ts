import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "Age",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredEmptiness){
    var output: Animal[] = [];
    if (desiredEmptiness === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
