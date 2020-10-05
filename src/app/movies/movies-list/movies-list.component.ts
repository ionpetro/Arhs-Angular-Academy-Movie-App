import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
 
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  @Output() movieSelected = new EventEmitter();
  @Input() criteria: any;

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