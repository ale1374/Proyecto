import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  template:  `
  <div class="splash-container">
    <img src="assets/logo.jpg" alt="Logo Hamburguesas de Infarto" class="logo" />
    <h1 class="brand-title">Hamburguesas de Infarto</h1>
    <p class="subtitle">Donde el sabor impacta</p>
  </div>
`,
styles: [`
  .splash-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--primary-color); /* Rojo oscuro */
    color: var(--background-color); /* Blanco */
    text-align: center;
  }

  .logo {
    width: 200px;
    height: auto;
    animation: fadeInScale 2s ease-in-out;
  }

  .brand-title {
    font-family: var(--font-primary);
    font-size: 2rem;
    margin: 10px 0;
  }

  .subtitle {
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    font-weight: 300;
  }

  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`],
})

export class SplashScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/register-login');
    }, 3000); 
  }
}

