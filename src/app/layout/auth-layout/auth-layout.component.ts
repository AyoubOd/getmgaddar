import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class AuthLayoutComponent {
  isOpen: boolean = false;
  isOpenDropdownMobile: boolean = false;
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
