import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule, RouterModule, Header],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta implements OnInit {

  itens: any[] = [];
  total: number = 0;
  mensagem: string = '';

  constructor(public router: Router){
  }

  ngOnInit(): void {
    this.carregarCesta();
  }

  fazerBusca(busca: any) {
    this.router.navigate(['/vitrine'], { queryParams: { busca } });
  }

  carregarCesta() {
    const dados = localStorage.getItem('cesta');
    this.itens = dados ? JSON.parse(dados) : [];
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itens.reduce((acc, item) => acc + item.valor * item.qtd, 0);
  }

  limparCesta() {
    localStorage.removeItem('cesta');
    this.itens = [];
    this.total = 0;
  }

  finalizar() {
    this.mensagem = 'Compra finalizada! Obrigada.';
    this.limparCesta();
    setTimeout(() => {
    this.mensagem = '';
    this.router.navigate(['/vitrine']);
    }, 2000);
  }

  continuarComprando() {
    this.router.navigate(['/vitrine']);
  }

  aumentar(item: any) {
    item.qtd += 1;
    this.salvarCesta();
  }

  diminuir(item: any) {
    if (item.qtd > 1) {
      item.qtd -= 1;
    } else {
      this.itens = this.itens.filter(i => i.codigo !== item.codigo); 
    }
    this.salvarCesta();
  }

  salvarCesta() {
    localStorage.setItem('cesta', JSON.stringify(this.itens));
    this.calcularTotal();
  }

  irParaVitrine() {
    this.router.navigate(['/vitrine'])
  }
}
