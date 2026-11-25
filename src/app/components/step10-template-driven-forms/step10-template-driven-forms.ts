import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../shared/interfaces/person';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  selector: 'app-step10-template-driven-forms',
  styleUrl: './step10-template-driven-forms.css',
  templateUrl: './step10-template-driven-forms.html',
})
export class Step10TemplateDrivenForms {
  @ViewChild('eform', { static: false }) form: NgForm | undefined;

  onSubmit(value: Person) {
    console.log('Form Submit', value);
  }
}
