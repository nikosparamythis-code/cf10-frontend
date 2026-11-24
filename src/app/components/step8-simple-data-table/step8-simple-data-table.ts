import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  imports: [],
  selector: 'app-step8-simple-data-table',
  styleUrl: './step8-simple-data-table.css',
  templateUrl: './step8-simple-data-table.html',
})
export class Step8SimpleDataTable {
  @Input() data: Person[] | undefined;

  sortOrder = {
    firstname: 'none',
    lastname: 'none',
    email: 'none',
  };

  sortData(sortKey: keyof Person): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }
    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof Person] == 'none';
      }
    }
  }
}
