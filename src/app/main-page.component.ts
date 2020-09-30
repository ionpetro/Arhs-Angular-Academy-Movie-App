import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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
