import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, NgForm } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, InputTextModule, RouterLink, RippleModule, FormsModule, ProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private userService = inject(UserService);
  public isLoading = false;

  onSubmit(form: NgForm) {
    const { username, password } = form.value;
    this.isLoading = true;
    const subscription = this.userService.login(username, password);
    subscription.add(() => {
      this.isLoading = false;
    });
  }
}
