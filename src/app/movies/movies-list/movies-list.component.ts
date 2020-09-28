import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { movies } from '../data/movies';
// import { Movie } from '../movie';
 
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  @Output() movieSelected = new EventEmitter();
  @Input() criteria: any;

  // movies: Movie[] = [
  //   { title: 'Inception', dateReleased: '16-07-2010' },
  //   { title: 'Lord of the Rings', dateReleased: '19-12-2001' },
  //   { title: 'Avengers', dateReleased: '26-04-2019' },
  //   { title: 'Batman', dateReleased: '18-07-2008' },
  // ];

  movies = [];
  
  constructor(
    private db: DbService
  ) {}
  
  ngOnInit(): void {
    let allMovies = this.db.getMovies();

    if (this.criteria) {
      if (this.criteria.featured) {
        for (let movie of allMovies) {
          if (movie.featured) {
            this.movies.push(movie)
          } 
        }
      }

    } else {

      this.movies = allMovies;

    }
  }
}