import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorias } from '../../interfaces/categorias.model';
import { CategoriasService } from '../../services/categorias.service';
import { Burgers } from '../../interfaces/burgers.model';
import { BurgersService } from '../../services/burgers.service'; // Importa o serviço de burgers
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent   implements OnInit {
  categorias: Categorias[] = []; // Lista de categorias
  burgers: Burgers[] = []; // Lista de hambúrgueres
  filteredBurgers: Burgers[] = []; // Hambúrgueres filtrados pela 
  
  

  constructor(
    private categoriaService: CategoriasService,
    private burgersService: BurgersService
  ) {}

  ngOnInit(): void {
    this.loadCategorias();
    this.loadBurgers();
  }

  // Método para carregar todas as categorias
  async loadCategorias(): Promise<void> {
    try {
      this.categorias = await this.categoriaService.getAllCategorias();
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  }

  // Método para carregar todos os hambúrgueres
  async loadBurgers(): Promise<void> {
    try {
      this.burgers = await this.burgersService.getAllBurgers();
    } catch (error) {
      console.error('Erro ao carregar os hambúrgueres:', error);
    }
  }

  // Filtra os hambúrgueres pela categoria selecionada
  filterBurgersByCategory(categoryId: number): void {
    this.filteredBurgers = this.burgers.filter(burger => burger.category.id === categoryId);
  }

}
