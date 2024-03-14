import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkoutPlanComponent } from './create-workout-plan.component';

describe('CreateWorkoutPlanComponent', () => {
  let component: CreateWorkoutPlanComponent;
  let fixture: ComponentFixture<CreateWorkoutPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWorkoutPlanComponent]
    });
    fixture = TestBed.createComponent(CreateWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
