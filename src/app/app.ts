import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
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
