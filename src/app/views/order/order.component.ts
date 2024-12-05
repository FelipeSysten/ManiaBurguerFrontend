import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicionado aqui
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  // Variáveis para armazenar os produtos e suas quantidades
  produto1: string = '';
  quantidade1: number | null = null;

  produto2: string = '';
  quantidade2: number | null = null;

  observacao: string = '';

  // Método para processar o envio do formulário
  submitOrder() {
    console.log('Pedido enviado:', {
      produto1: this.produto1,
      quantidade1: this.quantidade1,
      produto2: this.produto2,
      quantidade2: this.quantidade2,
      observacao: this.observacao,
    });
  }
}
