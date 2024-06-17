import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  storedToken = localStorage.getItem('authToken');

  userIsSignedIn:boolean = false
  canActivate(): boolean {
    // Implement your logic to check if the user is signed in.
    // If the user is signed in, return true to allow access to the route.
    // If the user is not signed in, return false and redirect to the login page.
    if(this.storedToken){

      this.userIsSignedIn = true

    }else{

      this.userIsSignedIn = false

    }


    if (this.userIsSignedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
