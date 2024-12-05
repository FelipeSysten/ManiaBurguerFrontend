import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { RouterLink, Router } from '@angular/router';
import { CardComponent } from "../../components/card/card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

   // Injeção do serviço Router para navegação
   constructor(private router: Router) {}

     // Função para navegar para a rota passada como argumento
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]); // Navega para a rota dinâmica
  }
}
