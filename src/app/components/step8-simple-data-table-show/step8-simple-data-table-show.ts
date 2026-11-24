import { Component } from '@angular/core';
import { ManyPerson } from '../../shared/interfaces/person';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';

@Component({
  imports: [Step8SimpleDataTable],
  selector: 'app-step8-simple-data-table-show',
  styleUrl: './step8-simple-data-table-show.css',
  templateUrl: './step8-simple-data-table-show.html',
})
export class Step8SimpleDataTableShow {
  manyPerson = ManyPerson;
}
