import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None // Estilos não serão encapsulados, ou seja, podem afetar outros elementos fora do componente
})
export class ButtonComponent {
 
  // Entrada para o texto exibido no botão (valor padrão 'Button')
  @Input() label: string = 'Button';

  // Entrada para definir o estilo do botão ('filled' ou 'outlined', valor padrão 'filled')
  @Input() type: 'filled' | 'outlined' = 'filled';

  // Entrada para definir o tamanho do botão ('default' ou 'large', valor padrão 'default')
  @Input() size: 'default' | 'large' = 'default';
}
