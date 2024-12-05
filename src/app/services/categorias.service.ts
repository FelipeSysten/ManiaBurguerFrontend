import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url = 'https://localhost:7078/api/Category/ListarCategorys'; // URL do json-server

  constructor() {}

  // Método para buscar todas as categorias
  async getAllCategorias(): Promise<Categorias[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Erro ao buscar categorias.');
      }
      const result = await response.json();
      return result.dados; // Acessar a propriedade 'dados'
    } catch (error) {
      console.error('Erro ao buscar todas as categorias:', error);
      return [];
    }
  }

  // Método para buscar uma categoria pelo ID
  async getCategoriaById(id: number): Promise<Categorias | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        console.warn(`Categoria com ID ${id} não encontrada.`);
        return undefined;
      }
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar a categoria com ID ${id}:`, error);
      return undefined;
    }
  }

  // Método para adicionar uma nova categoria
  async addCategoria(categoria: Categorias): Promise<Categorias> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar categoria.');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
      throw error;
    }
  }

  // Método para atualizar uma categoria existente
  async updateCategoria(id: number, categoria: Categorias): Promise<Categorias> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar categoria.');
      }
      return await response.json();
    } catch (error) {
      console.error(`Erro ao atualizar a categoria com ID ${id}:`, error);
      throw error;
    }
  }

  // Método para excluir uma categoria pelo ID
  async deleteCategoria(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir categoria.');
      }
    } catch (error) {
      console.error(`Erro ao excluir a categoria com ID ${id}:`, error);
      throw error;
    }
  }
}
