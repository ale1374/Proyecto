import { Component } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-container">
      <h1>Estado de tu Pedido</h1>
      <div class="order-info">
        <p><strong>Número de Pedido:</strong> {{ orderId }}</p>
        <p><strong>Total:</strong> {{ totalPrice.toFixed(2) }}</p>
        <p><strong>Tiempo Estimado:</strong> 25 minutos</p>
      </div>

      <!-- Barra de Progreso -->
      <div class="progress-container">
        <div *ngFor="let stage of stages; let i = index" class="stage">
          <div class="icon" [class.completed]="stage.completed"></div>
          <p [class.active]="stage.completed || i === currentStageIndex">{{ stage.name }}</p>
        </div>
        <div class="progress-bar" [style.width]="progressPercentage"></div>
      </div>
    </div>
  `,
  styles: [`
    .status-container {
      padding: 20px;
      text-align: center;
      color: var(--text-color);
      font-family: var(--font-primary);
    }

    h1 {
      color: var(--primary-color);
      margin-bottom: 20px;
    }

    .order-info p {
      margin: 5px 0;
      font-family: var(--font-secondary);
      font-size: 1rem;
    }

    .progress-container {
      position: relative;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .stage {
      text-align: center;
      flex: 1;
    }

    .icon {
      width: 25px;
      height: 25px;
      margin: 0 auto;
      border: 2px solid var(--secondary-color);
      border-radius: 50%;
      background-color: var(--background-color);
      transition: background-color 0.3s, border-color 0.3s;
    }

    .icon.completed {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }

    .progress-bar {
      position: absolute;
      top: 12.5px;
      left: 0;
      height: 3px;
      background-color: var(--primary-color);
      z-index: -1;
      transition: width 0.3s;
    }

    .stage p {
      margin-top: 10px;
      font-size: 0.9rem;
      font-family: var(--font-secondary);
    }

    .stage p.active {
      color: var(--primary-color);
      font-weight: bold;
    }
  `],
})
export class OrderStatusComponent {
  orderId = '12345'; // Número de pedido
  totalPrice = 19.99; // Precio total del pedido

  stages = [
    { name: 'Pedido Recibido', completed: true },
    { name: 'Preparando', completed: true },
    { name: 'Listo para Entregar', completed: false },
    { name: 'En Camino', completed: false },
    { name: 'Entregado', completed: false },
  ];

  get currentStageIndex() {
    return this.stages.findIndex((stage) => !stage.completed);
  }

  get progressPercentage() {
    const completedStages = this.stages.filter((stage) => stage.completed).length;
    return `${(completedStages / this.stages.length) * 100}%`;
  }
}