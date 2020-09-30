import { CanActivate } from '@angular/router';

 import { Injectable } from '@angular/core';
 import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
 @Injectable({providedIn: 'root'})
 export class MoviesGuard implements CanActivate {

    hasAccess:string = '';

    constructor() { }
 
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        this.hasAccess = sessionStorage.getItem('access')
        if (this.hasAccess === 'YES') {
            return true;
        } else {
            alert("You don't have access\nClick the button to gain access to Movies");
            return false;
        }
    }
}   

