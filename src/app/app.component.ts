import { Component, OnInit } from '@angular/core';
import { PeopleService } from './core/people.service';
import { People } from './shared/people.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starwars';
  people: People[] = [];

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(data => {
      this.people = data.results;
    })
  }

  navigate(name: string) {
    this.router.navigate(['/people', name])
  }
}
