import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleSummaryComponent } from './people-summary/people-summary.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';



@NgModule({
  declarations: [PeopleSummaryComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PeopleSummaryComponent,
    PeopleDetailComponent
  ]
})
export class FeaturesModule { }
