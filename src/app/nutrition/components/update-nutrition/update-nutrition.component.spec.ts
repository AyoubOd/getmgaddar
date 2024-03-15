import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNutritionComponent } from './update-nutrition.component';

describe('UpdateNutritionComponent', () => {
  let component: UpdateNutritionComponent;
  let fixture: ComponentFixture<UpdateNutritionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNutritionComponent]
    });
    fixture = TestBed.createComponent(UpdateNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
