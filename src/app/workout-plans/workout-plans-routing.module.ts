import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlansComponent } from './components/list-workout-plans/workout-plans.component';
import { CreateWorkoutPlanComponent } from './components/create-workout-plan/create-workout-plan.component';

const routes: Routes = [
  { path: '', component: WorkoutPlansComponent },
  { path: 'create', component: CreateWorkoutPlanComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class WorkoutPlansRoutingModule {}
