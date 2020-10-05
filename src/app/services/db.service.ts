import { Injectable } from '@angular/core';
import { movies } from '../movies/data/movies';
import { Movie } from '../movies/movie';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getMovies(criteria?: Object): Array<Movie> {
    if (criteria) {
      return movies.filter(movie => !movie.featured)
    } else {
      return movies
    }
  }

}
