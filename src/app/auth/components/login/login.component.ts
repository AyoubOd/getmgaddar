import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router: Router = inject(Router);
  user: User = { email: '', password: '' };

  async onSubmit() {
    console.log(this.user);
    try {
      const user = await this.authService.login(
        this.user.email,
        this.user.password
      );

      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
