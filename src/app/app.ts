import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';

@Component({
  imports: [Step2PersonTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  //Step 1 One way Binding
  name = 'Nikos';

  user = {
    firstname: 'Ringo',
    lastname: 'Star',
    email: 'beatles@music.com',
  };
}
