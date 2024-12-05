import { Injectable } from '@angular/core';
import { Burgers } from '../interfaces/burgers.model';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {
  url = 'https://localhost:7078/api/Product/ListarProducts'; // URL do JSON Server

  constructor() {}

  async getAllBurgers(): Promise<Burgers[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        console.error(`Erro ao buscar hambúrgueres: ${response.statusText}`);
        return [];
      }
      const result = await response.json();
      return result.dados || []; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao buscar hambúrgueres:', error);
      return [];
    }
  }

  async getBurgerById(id: number): Promise<Burgers | null> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        console.warn(`Hambúrguer com ID ${id} não encontrado.`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao buscar hambúrguer:', error);
      return null;
    }
  }

  async addBurger(burger: Burgers): Promise<Burgers | null> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(burger),
      });
      if (!response.ok) {
        console.error(`Erro ao adicionar hambúrguer: ${response.statusText}`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao adicionar hambúrguer:', error);
      return null;
    }
  }

  async updateBurger(id: number, burger: Burgers): Promise<Burgers | null> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(burger),
      });
      if (!response.ok) {
        console.error(`Erro ao atualizar hambúrguer com ID ${id}: ${response.statusText}`);
        return null;
      }
      const result = await response.json();
      return result.dados || null; // Acessa a propriedade "dados"
    } catch (error) {
      console.error('Erro ao atualizar hambúrguer:', error);
      return null;
    }
  }

  async deleteBurger(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        console.error(`Erro ao excluir hambúrguer com ID ${id}: ${response.statusText}`);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erro ao excluir hambúrguer:', error);
      return false;
    }
  }
}
