import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// isso eh um servico com notacao SPRING Java
//Como eh servico pode isnerir em diber sos componentes
// pode colocar metodos, fazer, busca, deletar, posta
// angular eh framework, trabalha com componentes mas da ferramentas pra //trabalhar com objetos ese quiser
@Injectable()
export class CartService {
  items = [];
  // recebe uma lista de itens vazias

  constructor(
    private http: HttpClient
    
  ) {}


  addToCart(product) {
    this.items.push(product);
    // metodo de arrays do java script  push sempre add no fim da lista
    // shift (começo da lista) ou  pop (fim da lista)
  }

  getItems() {
    return this.items;
  }

   deleteItems() {
    this.items.pop;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}