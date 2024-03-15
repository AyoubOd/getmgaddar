import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { CreateNutritionComponent } from './components/create-nutrition/create-nutrition.component';
import { UpdateNutritionComponent } from './update-nutrition/update-nutrition.component';



@NgModule({
  declarations: [
    NutritionListComponent,
    CreateNutritionComponent,
    UpdateNutritionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NutritionModule { }
