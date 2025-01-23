import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="register-login-container">
      <h1>Bienvenido</h1>
      <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
        <input type="email" formControlName="email" placeholder="Correo Electrónico" />
        <input type="password" formControlName="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  `,styles: [`
    .register-login-container {
      text-align: center;
      padding: 20px;
    }
  
    h1 {
      color: var(--primary-color);
      font-family: var(--font-primary);
      margin-bottom: 20px;
    }
  
    .input {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      font-family: var(--font-secondary);
    }
  
    .btn {
      background-color: var(--primary-color);
      color: var(--background-color);
      font-family: var(--font-secondary);
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }
  `]
})


export class RegisterLoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onLogin() {
    console.log(this.loginForm.value);
  }
}