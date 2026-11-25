import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    Step3PersonTableInput,
    Step8SimpleDataTable,
  ],
  selector: 'app-step10-template-driven-forms',
  styleUrl: './step10-template-driven-forms.css',
  templateUrl: './step10-template-driven-forms.html',
})
export class Step10TemplateDrivenForms {
  @ViewChild('eform', { static: false }) form: NgForm | undefined;

  currentPerson: Person | undefined;
  persons: Person[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.form) {
        this.form.setValue({
          firstname: 'John',
          lastname: 'Doe',
          email: 'johndoe@gmail.com',
        });
      }
    });
  }

  onSubmit(value: Person) {
    console.log('Form Submit', value);
    this.currentPerson = value;
    // this.persons.push(value);
    this.persons = [...this.persons, value];
    console.log(this.persons);
  }
}
