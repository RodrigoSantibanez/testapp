import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      const navigationState = this.router.getCurrentNavigation()?.extras?.state;
      
      if (navigationState && 'user' in navigationState) {
        this.data = navigationState['user'];
        console.log(this.data);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}

