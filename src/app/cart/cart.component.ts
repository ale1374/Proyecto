import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h1>Tu Carrito</h1>

      <!-- Lista de Productos -->
      <div *ngFor="let item of cartItems; let i = index" class="cart-item">
        <img [src]="item.img" alt="{{ item.name }}" class="item-img" />
        <div class="item-details">
          <h2>{{ item.name }}</h2>
          <p>Cantidad: {{ item.quantity }}</p>
          <p>Precio Unitario: {{ item.price.toFixed(2) }}</p>
          <p>Total: {{ (item.quantity * item.price).toFixed(2) }}</p>
        </div>
        <button (click)="removeItem(i)" class="remove-btn">Eliminar</button>
      </div>

      <!-- Total General -->
      <div class="total-section">
        <h2>Total General: {{ calculateTotal().toFixed(2) }}</h2>
        <button class="clear-btn" (click)="clearCart()">Vaciar Carrito</button>
        <button class="confirm-btn" (click)="confirmOrder()">Confirmar Pedido</button>
      </div>
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: var(--primary-color);
      font-family: var(--font-primary);
    }

    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--secondary-color);
      padding: 10px 0;
      margin-bottom: 10px;
    }

    .item-img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 5px;
    }

    .item-details {
      text-align: left;
      flex: 1;
      padding: 0 20px;
    }

    .item-details h2 {
      font-family: var(--font-secondary);
      font-size: 1.2rem;
      margin-bottom: 5px;
    }

    .remove-btn {
      background-color: var(--secondary-color);
      color: var(--text-color);
      font-family: var(--font-secondary);
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .total-section {
      margin-top: 20px;
      text-align: center;
    }

    .clear-btn, .confirm-btn {
      background-color: var(--primary-color);
      color: var(--background-color);
      font-family: var(--font-secondary);
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin: 5px;
    }
    
    .clear-btn:hover, .confirm-btn:hover {
      transform: scale(1.05);
    }
  `],
})
export class CartComponent {
  cartItems = [
    { name: 'Doble Infarto', img: 'assets/Doble Infarto.jpg', quantity: 1, price: 7.99 },
    { name: 'Infarto BBQ', img: 'assets/Infarto BBQ.jpg', quantity: 2, price: 5.49 },
  ];

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    alert('Producto eliminado del carrito');
  }

  clearCart() {
    this.cartItems = [];
    alert('El carrito está vacío.');
  }

  confirmOrder() {
    console.log('Pedido confirmado:', this.cartItems);
    alert('¡Pedido confirmado! Gracias por tu compra.');
    this.clearCart();
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}