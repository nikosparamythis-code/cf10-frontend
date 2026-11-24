import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Person } from './shared/interfaces/person';
import { Navbar } from './components/navbar/navbar';
import { Step7ListGroupMenu } from './components/step7-list-group-menu/step7-list-group-menu';

@Component({
  imports: [
    Step2PersonTable,
    Step3PersonTableInput,
    Step4ForDirective,
    Step5EventBind,
    RouterOutlet,
    Step7ListGroupMenu,
    Navbar,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  //Step 1 One way Binding
  name = 'Nikos';

  doNotShowRest: boolean = true;

  user = {
    firstname: 'Ringo',
    lastname: 'Star',
    email: 'beatles@music.com',
  };

  person1: Person = {
    firstname: 'George',
    lastname: 'Harrison',
    email: 'beatles@music.com',
  };

  person2: Person = {
    firstname: 'Paul',
    lastname: 'McCartney',
    email: 'beatles@music.com',
  };
}
