import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
