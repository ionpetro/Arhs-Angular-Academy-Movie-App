import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title:string = 'angular-academy';
  access:string = 'NO';

  ngOnInit() {
    sessionStorage.setItem('access', this.access);
  }

  setSessionStorage() {
    this.access = 'YES';
    sessionStorage.setItem('access', this.access);
  }

}
