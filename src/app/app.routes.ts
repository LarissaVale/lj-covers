import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Detalhe } from './detalhe/detalhe';
import { RecuperarSenha } from './recuperar-senha/recuperar-senha';

export const routes: Routes = [
  { path: '', redirectTo: 'vitrine', pathMatch: 'full' },
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'cesta', component: Cesta },
  { path: 'detalhe', component: Detalhe },
  { path: 'recuperar-senha', component: RecuperarSenha },
];