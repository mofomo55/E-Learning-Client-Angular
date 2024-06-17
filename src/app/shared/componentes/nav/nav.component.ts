import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  userName:any = localStorage.getItem('UserName');

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('UserName');
    localStorage.removeItem('Role');
    localStorage.removeItem('RoleID');
    // localStorage.removeItem('UserID');
    // localStorage.removeItem('UserName');
    // localStorage.removeItem('Role');
    // window.location.reload(false);
    // Perform any other logout-related tasks, such as redirecting the user
    // or clearing user-related data from your application
  }

}
