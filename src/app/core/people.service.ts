import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../shared/people.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPeople(): Observable<any> {
    return this.httpClient.get<any>(environment.API_URL + 'people/');
  }

  getPeopleByName(name: string): Observable<any> {
    return this.httpClient.get<any>(environment.API_URL + 'people/?search=' + name);
  }
}
