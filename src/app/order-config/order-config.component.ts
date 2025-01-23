import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-order-config',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template:`
    <div class="order-config-container">
      <h1>Configura tu Hamburguesa</h1>

      <!-- Selección de pan -->
      <div class="form-group">
        <label for="bread">Selecciona el tipo de pan:</label>
        <select id="bread" formControlName="bread" class="select">
          <option *ngFor="let bread of breads" [value]="bread">{{ bread }}</option>
        </select>
      </div>

      <!-- Selección de ingredientes -->
      <div class="form-group">
        <label>Elige tus ingredientes adicionales:</label>
        <div class="ingredient-grid">
          <div *ngFor="let ingredient of ingredients" class="ingredient-card">
            <input 
              type="checkbox" 
              [id]="ingredient" 
              [value]="ingredient" 
              (change)="toggleIngredient($event)" 
            />
            <label [for]="ingredient">{{ ingredient }}</label>
          </div>
        </div>
      </div>

      <!-- Botón para agregar al carrito -->
      <button (click)="addToCart()" class="btn">Agregar al Carrito</button>
    </div>
  `,
  styles: [`
    .order-config-container {
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: var(--primary-color);
      font-family: var(--font-primary);
      margin-bottom: 20px;
    }

    .form-group {
      margin: 20px 0;
    }

    .select {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
    }

    .ingredient-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 10px;
    }

    .ingredient-card {
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      padding: 10px;
      text-align: center;
      background-color: var(--background-color);
    }

    .btn {
      background-color: var(--primary-color);
      color: var(--background-color);
      padding: 10px 20px;
      font-family: var(--font-secondary);
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      transition: transform 0.2s;
    }

    .btn:hover {
      transform: scale(1.05);
    }
  `],
})
export class OrderConfigComponent {
  breads = ['Blanco', 'Integral', 'Brioche'];
  ingredients = ['Queso', 'Tocino', 'Champiñones', 'Cebolla caramelizada', 'Lechuga', 'Tomate'];
  selectedIngredients: string[] = [];

  constructor(private fb: FormBuilder) {}

  toggleIngredient(event: any) {
    const ingredient = event.target.value;
    if (event.target.checked) {
      this.selectedIngredients.push(ingredient);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter((ing) => ing !== ingredient);
    }
  }

  addToCart() {
    console.log('Pedido personalizado:', {
      bread: this.selectedIngredients, // Incluye lógica del formulario si está implementado
      ingredients: this.selectedIngredients,
    });
    alert('¡Hamburguesa agregada al carrito!');
  }
}