import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from '../../interfaces/categorias.model';
import { Burgers } from '../../interfaces/burgers.model';
import { CategoriasService } from '../../services/categorias.service';
import { BurgersService } from '../../services/burgers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent  implements OnInit {

  @Input() burger!: Burgers;  // Aceita a entrada de um hambúrguer
  @Input() categorias: Categorias[] = [];  // Lista de categorias recebida do componente pai

  
  @Input() text: string = ''; 
  @Input() title = ''; // Simplificado sem o tipo explícito, TypeScript infere como string



  constructor(
    private categoriaService: CategoriasService,
    private burgersService: BurgersService,
    private route: ActivatedRoute, // Injeção para acessar parâmetros da URL
    private router: Router
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
