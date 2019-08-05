import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateDrivenFormComponent } from './template-driven-form.component';

describe('TeamplateDrivenFormComponent', () => {
  let component: TeamplateDrivenFormComponent;
  let fixture: ComponentFixture<TeamplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
