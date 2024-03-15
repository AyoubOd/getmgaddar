import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs';

export interface Nutrition {
  id?: string;
  name: string;
  calories: number;
  protein: number;
}

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private afs = inject(AngularFirestore);

  getAll() {
    return this.afs.collection('Nutritions').snapshotChanges();
  }

  add(nutrition: Nutrition) {
    nutrition.id = this.afs.createId();
    this.afs.collection('Nutritions').add(nutrition);
  }

  delete(nutrition: Nutrition) {
    console.log(this.afs.collection('Nutritions').doc(nutrition.id));
    return this.afs.collection('Nutritions').doc(nutrition.id).delete();
  }

  get(id: string) {
    return this.afs.collection('Nutritions').doc(id).snapshotChanges();
  }

  update(id: string, newData: Nutrition) {
    this.afs.collection('nutritions').doc(id).delete();
    return this.add(newData);
  }
}
