import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [],
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router: Router = inject(Router);
  user: User = { email: '', password: '' };

  async onSubmit() {
    console.log(this.user);
    try {
      await this.authService.register(this.user.email, this.user.password);

      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
