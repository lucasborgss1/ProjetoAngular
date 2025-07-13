import { CommonModule } from '@angular/common';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  formLogin!: FormGroup;
  passwordVisible = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

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

  onSubmit() {
    if (this.formLogin.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const { nome, senha } = this.formLogin.value;

    this.loginService.login(nome, senha).subscribe({
      next: (response) => {
        // Assuming the response contains a token or user data
        this.authService.login(response);
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        this.errorMessage = 'Usuário ou senha inválidos.';
        console.error('Login failed', error);
      },
    });
  }
}
