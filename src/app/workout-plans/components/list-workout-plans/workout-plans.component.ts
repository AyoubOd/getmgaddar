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
  displayedColumns: string[] = ['name', 'date', 'exercices'];
  dataSource = new MatTableDataSource<WorkoutPlan>();
  private workoutPlansService = inject(WorkoutPlansService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.workoutPlansService
      .getAll()
      .pipe(
        map((data) => {
          return data.map((val) => {
            if (val.date) {
              const da = val.date as unknown as Timestamp;
              val.date = da.toDate().toString();
            }
            return val;
          });
        })
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<WorkoutPlan>(
          data as WorkoutPlan[]
        );
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export type exercice = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export interface WorkoutPlan {
  name: string;
  date: string;
  exercices: exercice[];
}
