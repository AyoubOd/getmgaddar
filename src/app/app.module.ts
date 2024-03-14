import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environment/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, GuestLayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    AuthLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
