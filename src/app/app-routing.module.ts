import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '../app/main-page.component';
import { AboutComponent } from '../app/about/about.component';

const routes: Routes = [
    {path: 'movies-list', component: MainPageComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
