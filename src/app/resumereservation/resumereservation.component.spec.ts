import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumereservationComponent } from './resumereservation.component';

describe('ResumereservationComponent', () => {
  let component: ResumereservationComponent;
  let fixture: ComponentFixture<ResumereservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumereservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
