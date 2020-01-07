import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from 'src/app/shared/people.model';

@Component({
  selector: 'app-people-summary',
  templateUrl: './people-summary.component.html',
  styleUrls: ['./people-summary.component.css']
})
export class PeopleSummaryComponent implements OnInit {

  @Input() people: People;
  @Output() clickEmitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  summaryClick(): any {
    this.clickEmitter.emit(this.people.name);
  }

}
