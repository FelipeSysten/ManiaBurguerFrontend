import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Burgers } from '../../interfaces/burgers.model';
import { Categorias } from '../../interfaces/categorias.model';
import { BurgersService } from '../../services/burgers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardPadraoComponent } from "../../components/card-padrao/card-padrao.component";
import { DescriptionComponent } from "../../components/description/description.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../services/categorias.service';
import { CardPrecoComponent } from "../../components/card-preco/card-preco.component";


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardPadraoComponent, DescriptionComponent, ButtonComponent, CommonModule, CardPrecoComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [BurgersService],
})

export class DetailComponent implements OnInit {
  categorias: Categorias[] = [];  // Lista de categorias
  burgers: Burgers[] = [];        // Lista de hambúrgueres
  filteredBurgers: Burgers[] = []; // Hambúrgueres filtrados
  categoryId: number | null = null; // Para armazenar o ID da categoria
  showAll: boolean = false;
  produto: Burgers | undefined | null; // Produto selecionado
 
 

  constructor(
    private categoriaService: CategoriasService,
    private burgersService: BurgersService,
    private route: ActivatedRoute, // Injeção para acessar parâmetros da URL
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = +params.get('id')!;
      this.categoryId = categoryId;
      this.loadCategorias(categoryId);
      this.loadBurgers();
      this.loadBurger(); // Certifique-se de chamar o método para carregar o hambúrguer específico.
      console.log('ID do hambúrguer:', params.get('id')); // Verifique o valor do ID
    });
  }

   // Carregar categorias com base no id
   async loadCategorias(categoryId: number): Promise<void> {
    try {
      const allCategorias = await this.categoriaService.getAllCategorias();
      this.categorias = allCategorias.filter(categoria => categoria.id === categoryId); // Filtra pela categoria com id
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  }

  // Carregar todos os hambúrgueres
  async loadBurgers(): Promise<void> {
    try {
      this.burgers = await this.burgersService.getAllBurgers();
      if (this.categoryId) {
        this.filterBurgersByCategory(this.categoryId);  // Filtra os hambúrgueres pela categoria selecionada
      }
    } catch (error) {
      console.error('Erro ao carregar os hambúrgueres:', error);
    }
  }
  // Método para carregar o hambúrguer com base no ID da rota
  async loadBurger(): Promise<void> {
    const id = Number(this.route.snapshot.params['id']);
    if (isNaN(id)) {
      console.error('ID inválido: não é um número.');
      return;
    }
    try {
      this.produto = await this.burgersService.getBurgerById(id);
    } catch (error) {
      console.error('Erro ao carregar o hambúrguer:', error);
    }
    console.log(this.produto); // Verifique se o produto está sendo carregado corretamente.

  }
  

  // Navega para a rota de pedido
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

   // Filtrar os hambúrgueres pela categoria
   filterBurgersByCategory(categoryId: number): void {
    this.filteredBurgers = this.burgers.filter(burger => burger.categoryId === categoryId);
  }

   // Alterna o estado de 'showAll', controlando a visibilidade dos itens do menu
 toggleMenu() {
  this.showAll = !this.showAll; // Se estiver visível, oculta; se estiver oculto, mostra
}

}
