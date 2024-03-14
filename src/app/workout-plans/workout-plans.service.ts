import { Injectable, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { WorkoutPlan } from './components/list-workout-plans/workout-plans.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutPlansService {
  private afs = inject(AngularFirestore);

  getAll() {
    return this.afs
      .collection('WorkoutPlans')
      .valueChanges() as unknown as Observable<WorkoutPlan[]>;
  }

  add(workoutPlan: WorkoutPlan) {
    this.afs.collection('WorkoutPlans').add(workoutPlan);
  }
}
