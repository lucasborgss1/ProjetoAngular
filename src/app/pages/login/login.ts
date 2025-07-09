import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  passwordVisible = false;

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
    const input = document.getElementById('InputPassword') as HTMLInputElement;
    const icon = document.querySelector('.toggle-password') as HTMLElement;

    if (this.passwordVisible) {
      input.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
    } else {
      input.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  }
}
