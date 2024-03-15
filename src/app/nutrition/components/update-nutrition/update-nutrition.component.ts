import { NgIf, JsonPipe, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { NutritionService, Nutrition } from '../../nutrition.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-nutrition',
  templateUrl: './update-nutrition.component.html',
  styleUrls: ['./update-nutrition.component.css'],
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
export class UpdateNutritionComponent implements OnInit {
  private nutritionService: NutritionService = inject(NutritionService);
  private fb = inject(FormBuilder);
  private router: Router = inject(Router);
  private route = inject(ActivatedRoute);
  private snakBar: MatSnackBar = inject(MatSnackBar);
  nutritionForm: any = this.fb.group({
    name: '',
    calories: '',
    protein: '',
  });

  ngOnInit(): void {
    let id;
    this.route.paramMap.subscribe((data) => (id = data.get('id')));
    console.log(id);
    this.nutritionService
      .get(id!)
      .pipe(
        map((data: any) => {
          return data.payload.data() as Nutrition;
        })
      )
      .subscribe((data: any) => {
        this.nutritionForm = this.fb.group({
          name: data.name,
          calories: data.calories,
          protein: data.protein,
        });
      });
  }

  async onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    try {
      await this.nutritionService.update(
        id!,
        this.nutritionForm.getRawValue() as Nutrition
      );
      this.snakBar.open('Nutrition updated succesfully', '', {
        duration: 1000,
      });
      this.router.navigate(['/nutrition']);
    } catch (error) {
      console.log(error);
    }
  }
}
