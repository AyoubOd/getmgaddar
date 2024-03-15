import { Component, OnInit, inject } from '@angular/core';
import { WorkoutPlansService } from '../workout-plans/workout-plans.service';
import { NutritionService } from '../nutrition/nutrition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private workoutPlansService: WorkoutPlansService =
    inject(WorkoutPlansService);
  private nutritionPlansService: NutritionService = inject(NutritionService);

  numOfWorkouts = 0;
  numOfNutritions = 0;
  ngOnInit(): void {
    this.workoutPlansService
      .getAll()
      .subscribe((data) => (this.numOfWorkouts = data.length));
    this.nutritionPlansService
      .getAll()
      .subscribe((data) => (this.numOfNutritions = data.length));
  }
}
