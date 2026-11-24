import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';

@Component({
  imports: [],
  selector: 'app-step3-person-table-input',
  styleUrl: './step3-person-table-input.css',
  templateUrl: './step3-person-table-input.html',
})
export class Step3PersonTableInput {
  @Input() person: Person | undefined;
}
