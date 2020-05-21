import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsvoyageComponent } from './optionsvoyage.component';

describe('OptionsvoyageComponent', () => {
  let component: OptionsvoyageComponent;
  let fixture: ComponentFixture<OptionsvoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsvoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
