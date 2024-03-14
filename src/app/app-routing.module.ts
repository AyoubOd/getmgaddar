import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // todo : replace with dashboard component (redirect)
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'workout-plans',
    loadChildren: () =>
      import('./workout-plans/workout-plans-routing.module').then(
        (m) => m.WorkoutPlansRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  { path: 'auth', loadChildren: () => AuthModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
