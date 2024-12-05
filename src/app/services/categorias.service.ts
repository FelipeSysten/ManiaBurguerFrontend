import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  url = 'https://localhost:7078/api/Category/ListarCategorys'; // URL do endpoint para categorias

  constructor() {}

  // Método para buscar todas as categorias
  async getAllCategorias(): Promise<Categorias[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        console.error(`Erro ao buscar categorias: ${response.statusText}`);
        return [];
      }
      const result = await response.json();
      return result.dados || []; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      return [];
    }
  }

  // Método para buscar uma categoria pelo ID
  async getCategoriaById(id: number): Promise<Categorias | null> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        console.warn(`Categoria com ID ${id} não encontrada.`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao buscar categoria:', error);
      return null;
    }
  }

  // Método para adicionar uma nova categoria
  async addCategoria(categoria: Categorias): Promise<Categorias | null> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoria),
      });
      if (!response.ok) {
        console.error(`Erro ao adicionar categoria: ${response.statusText}`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
      return null;
    }
  }

  // Método para atualizar uma categoria existente
  async updateCategoria(id: number, categoria: Categorias): Promise<Categorias | null> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoria),
      });
      if (!response.ok) {
        console.error(`Erro ao atualizar categoria com ID ${id}: ${response.statusText}`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      return null;
    }
  }

  // Método para excluir uma categoria pelo ID
  async deleteCategoria(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        console.error(`Erro ao excluir categoria com ID ${id}: ${response.statusText}`);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      return false;
    }
  }
}