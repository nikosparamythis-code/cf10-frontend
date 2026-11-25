import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Step11ReactiveForms } from '../step11-reactive-forms/step11-reactive-forms';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-step7-list-group-menu',
  styleUrl: './step7-list-group-menu.css',
  templateUrl: './step7-list-group-menu.html',
})
export class Step7ListGroupMenu {
  menu = [
    { text: 'Step2 Person Table', routerLink: 'person-table-example' },
    { text: 'Step3 Component Input', routerLink: 'component-input-example' },
    { text: 'Step4 @for directive', routerLink: 'for-directive-example' },
    { text: 'Step5 Event Bind', routerLink: 'event-bind-example' },
    { text: 'Step8 Simple Data Table', routerLink: 'simple-data-table-example' },
    { text: 'Step9 Component Output', routerLink: 'component-output-example' },
    { text: 'Step10 Template Forms', routerLink: 'template-driven-form' },
    { text: 'Step11 Reactive Forms', routerLink: 'reactive-form-example' },
  ];
}
