import { Injectable } from '@angular/core';
import { movies } from '../movies/data/movies';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getMovies():any {
    return movies;
  }
}
