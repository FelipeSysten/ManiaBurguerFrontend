import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importação para pegar parâmetros da rota
import { Burgers } from '../../interfaces/burgers.model';
import { CategoriasService } from '../../services/categorias.service';
import { BurgersService } from '../../services/burgers.service';
import { Categorias } from '../../interfaces/categorias.model';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from "../categoria/categoria.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CardPadraoComponent } from "../../components/card-padrao/card-padrao.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, CommonModule, CategoriaComponent, ButtonComponent, CardPadraoComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categorias: Categorias[] = [];  // Lista de categorias
  burgers: Burgers[] = [];        // Lista de hambúrgueres
  filteredBurgers: Burgers[] = []; // Hambúrgueres filtrados
  categoryId: number | null = null; // Para armazenar o ID da categoria
  showAll: boolean = false;

 

  constructor(
    private categoriaService: CategoriasService,
    private burgersService: BurgersService,
    private route: ActivatedRoute, // Injeção para acessar parâmetros da URL
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = +params.get('id')!;  // Pegue o id da URL e converta para número
      this.categoryId = categoryId;
      this.loadCategorias(categoryId);        // Carregue a categoria com base no id
      this.loadBurgers();
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

  // Filtrar os hambúrgueres pela categoria
  filterBurgersByCategory(categoryId: number): void {
    this.filteredBurgers = this.burgers.filter(burger => burger.categoryId === categoryId);
  }

   // Alterna o estado de 'showAll', controlando a visibilidade dos itens do menu
 toggleMenu() {
  this.showAll = !this.showAll; // Se estiver visível, oculta; se estiver oculto, mostra
}

  // Navegar para a página de produtos filtrados por categoria
  navigateToCategory(BurgerId: number): void {
    this.router.navigate(['/detail', BurgerId]);
  }
}