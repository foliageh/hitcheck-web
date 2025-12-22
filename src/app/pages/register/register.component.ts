import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputTextModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    RouterLink,
    RippleModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private messageService = inject(MessageService);
  public isLoading = false;

  private validationFailed!: boolean;

  onSubmit(form: NgForm) {
    const { username, password, passwordConfirmation } = form.value;

    this.validationFailed = false;
    if (username == null || username.length < 6 || username.length > 20)
      this.showError('Username must be between 6 and 20 characters');
    if (username != null && !/^[a-z0-9_]+$/i.test(username))
      this.showError('Username must contain only letters, numbers and underscores');
    if (password != passwordConfirmation) this.showError("Passwords don't match");
    if (password == null || password.length < 8 || password.length > 32)
      this.showError('Password must be between 8 and 32 characters');
    if (this.validationFailed) return;

    this.isLoading = true;
    const subscription = this.userService.register(username, password);
    subscription.add(() => {
      this.isLoading = false;
    });
  }

  private showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
    this.validationFailed = true;
  }
}
