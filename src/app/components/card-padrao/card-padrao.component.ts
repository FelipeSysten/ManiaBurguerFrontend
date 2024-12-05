import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burgers } from '../../interfaces/burgers.model';
import { Categorias } from '../../interfaces/categorias.model';
import { BurgersService } from '../../services/burgers.service';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-card-padrao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-padrao.component.html',
  styleUrl: './card-padrao.component.css'
})
export class CardPadraoComponent implements OnInit {
 
  @Input() burger!: Burgers; // `burger` passado pelo pai
  @Input() categorias: Categorias[] = []; // Lista de categorias passada pelo pai
  @Input() title: string = ''; // Título do card (opcional)

  ngOnInit(): void {
    console.log('Burger recebido:', this.burger);
    console.log('Categorias recebidas:', this.categorias);
  }
  // Método para obter o nome da categoria com base no ID
  getCategoryName(categoryId: number): string {
    const category = this.categorias.find(categoria => categoria.id === categoryId);
    return category ? category.name : 'Sem Categoria';
  }
}