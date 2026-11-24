import { Routes } from '@angular/router';
import { Step6WelcomeRouting } from './components/step6-welcome-routing/step6-welcome-routing';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';

export const routes: Routes = [
  {
    path: 'welcome',
    component: Step6WelcomeRouting,
  },
  {
    path: 'step4',
    component: Step4ForDirective,
  },
];
