import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/shared/people.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/core/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
}) export class PeopleDetailComponent implements OnInit {
  people: People;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }
    
    ngOnInit() {
      console.log(this.people);
      let name = this.route.snapshot.paramMap.get('name');
      this.peopleService.getPeopleByName(name).subscribe(data => {
      if (data && data.results.length > 0) {
        this.people = data.results[0];
      } else {
        alert('No results');
      }
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }
} 