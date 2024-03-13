import { NgModule } from '@angular/core';
import { environment } from '../environment/environment';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  exports: [],
})
export class AuthModule {}
