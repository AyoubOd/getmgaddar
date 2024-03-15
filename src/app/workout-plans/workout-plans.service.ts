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
      .snapshotChanges() as unknown as Observable<any[]>;
  }

  add(workoutPlan: WorkoutPlan) {
    workoutPlan.id = this.afs.createId();
    this.afs.collection('WorkoutPlans').add(workoutPlan);
  }

  delete(workoutPlan: WorkoutPlan) {
    console.log(this.afs.collection('WorkoutPlans').doc(workoutPlan.id));
    return this.afs.collection('WorkoutPlans').doc(workoutPlan.id).delete();
  }
}
