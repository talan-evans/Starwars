import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './features/people-detail/people-detail.component';


const routes: Routes = [
  {
    path: 'people/:name',
    component: PeopleDetailComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
