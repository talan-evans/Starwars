import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailComponent } from './people-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

fdescribe('PeopleDetailComponent', () => {
  let component: PeopleDetailComponent;
  let fixture: ComponentFixture<PeopleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDetailComponent ],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
    let element = fixture.debugElement.nativeElement;
    let testPeople = {
      name: 'Test',
      mass: '10',
      hair_color: null,
      eye_color: null,
      height: null,
      skin_color: null,
      gender: null,
      url: null,
      birth_year: null

    }
    component.people = testPeople;
    fixture.detectChanges();
    expect(element.querySelector('#name').textContent).toContain('Test');
  });
});
