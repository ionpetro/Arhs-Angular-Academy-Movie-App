import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  selectedMovieTitle: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

      console.log(this.route);

      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
      });
    
  }

}
