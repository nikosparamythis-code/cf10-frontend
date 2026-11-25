import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke-service';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-step12-hhtp-client-service',
  styleUrl: './step12-hhtp-client-service.css',
  templateUrl: './step12-hhtp-client-service.html',
})
export class Step12HhtpClientService {
  jokeService = inject(JokeService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadJoke = data.joke;
      console.log(this.dadJoke);
    });
  }

  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data) => {
      this.chuckNorrisJoke = data.value;
      console.log(this.chuckNorrisJoke);
    });
  }
}
