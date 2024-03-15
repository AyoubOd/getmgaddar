import { Component, inject } from '@angular/core';
import { Nutrition, NutritionService } from '../../nutrition.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { JsonPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-nutrition',
  templateUrl: './create-nutrition.component.html',
  styleUrls: ['./create-nutrition.component.css'],
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
export class CreateNutritionComponent {
  private nutritionService: NutritionService = inject(NutritionService);
  private fb = inject(FormBuilder);
  private router: Router = inject(Router);
  private snakBar: MatSnackBar = inject(MatSnackBar);
  nutritionForm = this.fb.group({
    name: '',
    calories: 0,
    protein: 0,
  });

  async onSubmit() {
    try {
      await this.nutritionService.add(
        this.nutritionForm.getRawValue() as Nutrition
      );
      this.snakBar.open('Nutrition added succesfully', '', {
        duration: 1000,
      });
      this.router.navigate(['/nutrition']);
    } catch (error) {
      console.log(error);
    }
  }
}
