import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '../app/main-page.component';
import { AboutComponent } from '../app/about/about.component';
import { MoviesGuard} from '../app/moviesGuard';
import { SignupComponent } from './signup/signup.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'movies-list', component: MoviesComponent, canActivate: [MoviesGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
