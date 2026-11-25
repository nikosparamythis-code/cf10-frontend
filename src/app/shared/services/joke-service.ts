import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJoke, ChuckNorrisJoke } from '../interfaces/joke.interface';

const DAD_JOKE = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_JOKE = 'https://api.chucknorris.io/jokes/random';

@Service()
export class JokeService {
  http: HttpClient = inject(HttpClient);

  getDadJoke() {
    return this.http.get<DadJoke>(DAD_JOKE, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  getChuckNorrisJoke() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_JOKE, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
