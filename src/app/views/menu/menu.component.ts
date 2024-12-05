import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurgersService } from '../../services/burgers.service';
import { CategoriasService } from '../../services/categorias.service';
import { Categorias } from '../../interfaces/categorias.model';
import { Burgers } from '../../interfaces/burgers.model';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, CategoriaComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


  export class MenuComponent implements OnInit {
[x: string]: any;
    categorias: Categorias[] = []; // Lista de categorias
  burgers: Burgers[] = []; // Lista de hambúrgueres
  filteredBurgers: Burgers[] = []; // Hambúrgueres filtrados
  showAll: boolean = false;

  constructor(
    private burgersService: BurgersService,
    private categoriaService: CategoriasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategorias();
    this.loadBurgers();
  }

 // Alterna o estado de 'showAll', controlando a visibilidade dos itens do menu
 toggleMenu() {
  this.showAll = !this.showAll; // Se estiver visível, oculta; se estiver oculto, mostra
}

  // Navega para a página de categoria específica ao clicar no título de um item do menu
  viewCategory(title: string) {
    // A navegação é feita para a URL '/categoria/{title}', onde {title} é o título do item
    this.router.navigate(['/categoria', title]);
  }

  // Carregar as categorias
  async loadCategorias(): Promise<void> {
    try {
      this.categorias = await this.categoriaService.getAllCategorias();
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  }

  // Carregar os hambúrgueres
  async loadBurgers(): Promise<void> {
    try {
      this.burgers = await this.burgersService.getAllBurgers();
      this.filteredBurgers = this.burgers; // Inicializa com todos os hambúrgueres
    } catch (error) {
      console.error('Erro ao carregar os hambúrgueres:', error);
    }
  }


  // Navegar para a página de produtos filtrados por categoria
  navigateToCategory(categoryId: number): void {
    this.router.navigate(['/products', categoryId]);
  }
}




