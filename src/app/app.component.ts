import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Learning';
  isLoginPage: boolean = true;

  constructor(private router: Router) {
    // Listen to route changes and update the isLoginPage property
    router.events.subscribe((val) => {
      this.isLoginPage = this.router.url === '/login';
    });
  }


}
