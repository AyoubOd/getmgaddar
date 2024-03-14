import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutPlanComponent } from './components/create-workout-plan/create-workout-plan.component';
import { WorkoutPlansComponent } from './components/list-workout-plans/workout-plans.component';
import { WorkoutPlansRoutingModule } from './workout-plans-routing.module';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, WorkoutPlansRoutingModule, AuthLayoutComponent],
})
export class WorkoutPlansModule {}
