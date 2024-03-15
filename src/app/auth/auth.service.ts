import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly afAuth = inject(Auth);
  user$ = user(this.afAuth);

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  signOut() {
    this.afAuth.signOut();
  }
}
