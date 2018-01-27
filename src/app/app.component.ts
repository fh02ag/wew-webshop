import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public searchTerm;

  constructor(private router: Router) { }

  doProductSearch() {
    this.router.navigate(['/search'], { queryParams: { searchTerm: this.searchTerm } });
  }
}
