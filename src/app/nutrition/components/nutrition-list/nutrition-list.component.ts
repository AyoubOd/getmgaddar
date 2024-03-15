import { Component, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { Nutrition, NutritionService } from '../../nutrition.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { map, Timestamp } from 'rxjs';
import { JsonPipe, DatePipe, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nutrition-list',
  templateUrl: './nutrition-list.component.html',
  styleUrls: ['./nutrition-list.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    AuthLayoutComponent,
    JsonPipe,
    MatButtonModule,
    RouterLink,
    DatePipe,
    AsyncPipe,
  ],
})
export class NutritionListComponent {
  displayedColumns: string[] = ['id', 'name', 'calories', 'protein', 'actions'];
  dataSource = new MatTableDataSource<Nutrition>();
  private nutritionService = inject(NutritionService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.nutritionService
      .getAll()
      .pipe(
        map((data) => {
          return data.map((val: any) => {
            const id = val.payload.doc.id;
            const da = val.payload.doc.data();
            return { ...da, id } as unknown as Nutrition;
          });
        })
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<Nutrition>(
          data as Nutrition[]
        );
        console.log(data);
      });
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async deleteNutrition(nutrition: Nutrition) {
    console.log(nutrition);
    try {
      await this.nutritionService.delete(nutrition);
    } catch (error) {
      console.log(error);
    }
  }
}
