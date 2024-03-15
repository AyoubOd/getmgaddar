import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuthLayoutComponent } from '../../../layout/auth-layout/auth-layout.component';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { WorkoutPlansService } from '../../workout-plans.service';
import { Observable, map, reduce } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    AuthLayoutComponent,
    JsonPipe,
    MatButtonModule,
    RouterLink,
    DatePipe,
    AsyncPipe,
  ],
})
export class WorkoutPlansComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'exercices', 'actions'];
  dataSource = new MatTableDataSource<WorkoutPlan>();
  private workoutPlansService = inject(WorkoutPlansService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.workoutPlansService
      .getAll()
      .pipe(
        map((data) => {
          return data.map((val) => {
            const id = val.payload.doc.id;
            console.log(val.payload.doc.id);
            const da = val.payload.doc.data();
            if (da.date) {
              const date = da.date as unknown as Timestamp;
              da.date = date.toDate().toString();
            }
            return { ...da, id };

            // if (val.date) {
            //   const da = val.date as unknown as Timestamp;
            //   val.date = da.toDate().toString();
            // }
            // return val;
          });
        })
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<WorkoutPlan>(
          data as WorkoutPlan[]
        );
        console.log(data);
      });
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async deleteWorkout(workout: WorkoutPlan) {
    console.log(workout);
    try {
      await this.workoutPlansService.delete(workout);
    } catch (error) {
      console.log(error);
    }
  }
}

export type exercice = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export interface WorkoutPlan {
  id: string;
  name: string;
  date: string;
  exercices: exercice[];
}
