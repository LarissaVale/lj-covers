import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperar-senha',
  imports: [RouterModule, Header, FormsModule, CommonModule],
  templateUrl: './recuperar-senha.html',
  styleUrl: './recuperar-senha.css',
})
export class RecuperarSenha {

  email: string = '';
  mensagem: string = '';
  enviado: boolean = false;

  constructor(public router: Router) {}

  enviar() {
    if (!this.email) return;
    this.mensagem = `Instruções enviadas para ${this.email}. Verifique sua caixa de entrada.`;
    this.enviado = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}