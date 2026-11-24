import { Component } from '@angular/core';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';
import { ManyPerson, Person } from '../../shared/interfaces/person';

@Component({
  imports: [Step8SimpleDataTable],
  selector: 'app-step9-component-output',
  styleUrl: './step9-component-output.css',
  templateUrl: './step9-component-output.html',
})
export class Step9ComponentOutput {
  manyPerson = ManyPerson;

  showPersonClicked(person: Person) {
    console.log('From Step 9 >>', person);
  }
}
