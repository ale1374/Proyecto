import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="menu-container">
      <header>
        <h1>¡Bienvenido a Hamburguesas de Infarto!</h1>
      </header>
      
      <!-- Categorías -->
      <section class="categories">
        <h2>Categorías</h2>
        <div class="category-grid">
          <div *ngFor="let category of categories" class="category-card">
            <img [src]="category.img" alt="{{ category.name }}" />
            <p>{{ category.name }}</p>
          </div>
        </div>
      </section>
      
      <!-- Promociones -->
      <section class="promotions">
        <h2>Promociones Destacadas</h2>
        <div class="carousel">
          <div *ngFor="let promo of promotions" class="promotion-card">
            <img [src]="promo.img" alt="Promoción" />
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .menu-container {
      text-align: center;
      padding: 20px;
    }

    header {
      background-color: var(--primary-color);
      color: var(--background-color);
      padding: 15px;
      margin-bottom: 20px;
    }

    header h1 {
      font-family: var(--font-primary);
      font-size: 1.8rem;
    }

    .categories {
      margin-bottom: 30px;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }

    .category-card {
      border: 1px solid var(--secondary-color);
      border-radius: 8px;
      padding: 10px;
      background-color: var(--background-color);
      transition: transform 0.2s;
    }

    .category-card:hover {
      transform: scale(1.05);
    }

    .category-card img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .category-card p {
      font-family: var(--font-secondary);
      font-size: 1rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .promotions .carousel {
      display: flex;
      overflow-x: scroll;
      gap: 15px;
    }

    .promotion-card img {
      width: 300px;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s;
    }

    .promotion-card img:hover {
      transform: scale(1.1);
    }
  `],
})
export class MainMenuComponent {
  categories = [
    { name: 'Hamburguesas', img: 'assets/Doble Infarto.jpg' },
    { name: 'Bebidas', img: 'assets/Drink1.jpg' },
    { name: 'Postres', img: 'assets/Dulces1.jpg' },
  ];

  promotions = [
    { img: 'assets/Promo1.jpg' },
    { img: 'assets/Promo2.jpg' },
    { img: 'assets/Promo3.jpg' },
  ];
}


