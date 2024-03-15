import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import {
  WorkoutPlan,
  exercice,
} from '../list-workout-plans/workout-plans.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { JsonPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutPlansService } from '../../workout-plans.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-workout-plan',
  templateUrl: './create-workout-plan.component.html',
  styleUrls: ['./create-workout-plan.component.css'],
  standalone: true,
  imports: [
    AuthLayoutComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    JsonPipe,
    MatSnackBarModule,
  ],
})
export class CreateWorkoutPlanComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private workoutPlansService = inject(WorkoutPlansService);
  private router: Router = inject(Router);
  private snakBar = inject(MatSnackBar);

  workoutForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    exercices: [[], Validators.required],
  });

  exerciceForm = this.fb.group({
    name: '',
    sets: 0,
    reps: 0,
    weight: 0,
  });

  showExerciceForm = false;

  exercices: {
    name: string | null;
    sets: number | null;
    reps: number | null;
    weight: number | null;
  }[] = [];

  addExercice() {
    this.exercices.push(this.exerciceForm.getRawValue());
    this.showExerciceForm = false;
    this.exerciceForm.reset();
  }

  async onSubmit() {
    try {
      const data = {
        ...this.workoutForm.getRawValue(),
        exercices: this.exercices,
      } as WorkoutPlan;
      await this.workoutPlansService.add(data);
      this.snakBar.open('Workout added succesfully', '', {
        duration: 1000,
      });
      this.router.navigate(['/workout-plans']);
    } catch (e) {
      console.log(e);
    }
  }
}
