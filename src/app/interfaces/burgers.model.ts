import { Categorias } from "./categorias.model";

export interface Burgers {
    id: number;               // Identificador único
    name: string;             // Nome do hambúrguer
    baseDescription: string[];    // Lista de ingredientes
    fullDescription: string;
    pathImage: string;            // URL da imagem do hambúrguer
    price: number;            // Preço do hambúrguer
    categoryId:number;
    category: Categorias;  // Relacionamento com a categoria
  }
  