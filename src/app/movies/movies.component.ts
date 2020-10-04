import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovieTitle: string = '';
  paramsList: Array<string> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.route.queryParams.subscribe(params => {
        for (let param in params) {
          let result = `${param} : ${params[param]}`
          this.paramsList.push(result)
        }

      });
    
  }

}
