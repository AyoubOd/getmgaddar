import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { CreateNutritionComponent } from './components/create-nutrition/create-nutrition.component';
import { UpdateNutritionComponent } from './components/update-nutrition/update-nutrition.component';

const routes: Routes = [
  { path: '', component: NutritionListComponent },
  { path: 'create', component: CreateNutritionComponent },
  { path: 'update/:id', component: UpdateNutritionComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NutritionRoutingModule {}
