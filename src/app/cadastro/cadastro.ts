import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, RouterModule, CommonModule, Header],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  mensagem: string = '';

  constructor(public router: Router) {
  }
  
  cadastrar(){
    this.mensagem = 'Cadastro realizado com sucesso! Redirecionando...';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000)
  }


}
