import { Component, Input, OnInit } from '@angular/core';
import { Burgers } from '../../interfaces/burgers.model';
import { Categorias } from '../../interfaces/categorias.model';
import { BurgersService } from '../../services/burgers.service';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-card-preco',
  standalone: true,
  imports: [],
  templateUrl: './card-preco.component.html',
  styleUrl: './card-preco.component.css'
})
export class CardPrecoComponent  implements OnInit {
  @Input() burger!: Burgers;  // Aceita a entrada de um hambúrguer
  @Input() categorias: Categorias[] = [];  // Lista de categorias recebida do componente pai
  
   // Variáveis de entrada para o componente, com valores padrões
   // Variáveis de entrada para o componente, com valores padrões
   @Input() title: string = ''; 
   @Input() name: string = ''; 
   @Input() baseDescription: string = ''; 
   @Input() fullDescription: string = ''; // Alteração no nome para seguir o padrão camelCase
   @Input() pathImage: string = '';   
   @Input() price: Number | undefined;
  
  constructor(
    private burgersService: BurgersService,
    private categoriaService: CategoriasService,
  ) {}

  ngOnInit(): void {
    // Nenhum código de carregamento é necessário aqui, pois os dados já são passados como @Input
  }

  // Método para obter o nome da categoria do hambúrguer com base no categoryId
  getCategoryName(categoryId: number): string {
    const category = this.categorias.find(categoria => categoria.id === categoryId);
    return category ? category.name : 'Sem Categoria';
  }
  
}
 