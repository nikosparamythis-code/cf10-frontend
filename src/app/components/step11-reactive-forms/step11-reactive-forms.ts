import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../shared/interfaces/person';

@Component({
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  selector: 'app-step11-reactive-forms',
  styleUrl: './step11-reactive-forms.css',
  templateUrl: './step11-reactive-forms.html',
})
export class Step11ReactiveForms {
  myForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}
