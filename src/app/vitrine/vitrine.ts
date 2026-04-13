import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Header } from '../header/header';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

export interface Produto {
  codigo: number;
  nome: string;
  descritivo: string;
  valor: number;
  quantidade: number;
  gravadora: string;
  faixas: string[];
}

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule, Header, RouterModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  @ViewChild(Header) header!: Header;

  lista: Produto[] = [
    {
      codigo: 1,
      nome: 'Tim Maia 1972',
      descritivo: 'Seu terceiro álbum com 12 faixas onde ele embeleza e nos mostra o que realmente é MPB.',
      valor: 400.0,
      quantidade: 3,
      gravadora: 'Polydor',
      faixas: ['Não Quero Dinheiro', 'Me Dê Motivo', 'Primavera', 'Azul da Cor do Mar', 'Coroné Antônio Bento', 'Do You Speak English', 'Bom Senso', 'Ela Partiu', 'Quero Que Vá Tudo pro Inferno', 'Preciso Aprender a Ser Só', 'Réu Confesso', 'Imunização Racional'],
    },
    {
      codigo: 2,
      nome: 'Queen: News of the World 1977',
      descritivo: "Considerado por muitos o melhor álbum da banda, contendo 11 faixas sendo uma delas 'We Are The Champions'. Isso é Rock!",
      valor: 290.0,
      quantidade: 8,
      gravadora: 'EMI / Elektra',
      faixas: ['We Will Rock You', 'We Are the Champions', 'Sheer Heart Attack', 'All Dead, All Dead', 'Spread Your Wings', 'Fight from the Inside', 'Get Down, Make Love', 'Sleeping on the Sidewalk', 'Who Needs You', "It's Late", 'My Melancholy Blues'],
    },
    {
      codigo: 3,
      nome: 'Queen: A Night at the Opera 1975',
      descritivo: "Mistura rock, ópera, baladas e pop. Produção sofisticada para a época. 'Bohemian Rhapsody' sendo a mais conhecida.",
      valor: 250.0,
      quantidade: 20,
      gravadora: 'EMI / Elektra',
      faixas: ['Death on Two Legs', 'Lazing on a Sunday Afternoon', "I'm in Love with My Car", "You're My Best Friend", "'39", 'Sweet Lady', 'Seaside Rendezvous', "The Prophet's Song", 'Love of My Life', 'Good Company', 'Bohemian Rhapsody', 'God Save the Queen'],
    },
    {
      codigo: 4,
      nome: 'Creed: The Best Of Creed 2025',
      descritivo: 'Um disco onde se reúne o melhor do Creed. Isso é Slow Rock.',
      valor: 300.0,
      quantidade: 10,
      gravadora: 'Wind-up Records',
      faixas: ['My Sacrifice', 'With Arms Wide Open', 'Higher', 'One Last Breath', 'Are You Ready', 'Weathered', 'What If', 'Who I Am', 'Bullets', 'Young Grow Old'],
    },
    {
      codigo: 5,
      nome: "BMTH: That's the Spirit 2015",
      descritivo: "BMTH se renova em uma pegada mais pop sem deixar o Rock de lado. 11 faixas, com 'Follow You' sendo a melhor.",
      valor: 280.0,
      quantidade: 5,
      gravadora: 'RCA Records',
      faixas: ['Doomed', 'Happy Song', 'Throne', 'True Friends', 'Follow You', 'What You Need', 'Avalanche', 'Run', 'Drown', 'Blasphemy', 'Oh No'],
    },
    {
      codigo: 6,
      nome: 'BMTH: Sempiternal 2013',
      descritivo: "BMTH na sua maior essência, o puro Metalcore. 11 faixas sendo 'Can You Feel My Heart' a mais famosa.",
      valor: 300.0,
      quantidade: 8,
      gravadora: 'RCA Records',
      faixas: ['Can You Feel My Heart', 'The House of Wolves', 'Empire (Let Them Sing)', 'Sleepwalking', "Go to Hell, for Heaven's Sake", 'Shadow Moses', 'And the Snakes Start to Sing', 'Seen It All Before', 'Antivist', 'Crooked Young', 'Hospital for Souls'],
    },
    {
      codigo: 7,
      nome: 'Rita Lee (Remastered) 1979',
      descritivo: "Rita Lee revolucionando o POP brasileiro. 8 faixas, com 'Mania de Você' sendo a mais famosa.",
      valor: 260,
      quantidade: 7,
      gravadora: 'Som Livre',
      faixas: ['Mania de Você', 'Saúde', 'Lança Perfume', 'Cor de Rosa Choque', 'Chega Mais', 'Rock and Roll', 'Banho de Lua', 'Agora Só Falta Você'],
    },
    {
      codigo: 8,
      nome: 'Chico Buarque 1987',
      descritivo: "Com 11 faixas Chico traz um novo ar para o MPB, com 'Cálice' e 'Apesar de Você' eternizadas na memória.",
      valor: 300.0,
      quantidade: 1,
      gravadora: 'Philips',
      faixas: ['Cálice', 'Apesar de Você', 'Construção', 'Cotidiano', 'Vai Passar', 'Tanto Mar', 'Meu Caro Amigo', 'O Que Será (À Flor da Pele)', 'Com Açúcar, com Afeto', "Gota d'Água", 'A Banda'],
    },
    {
      codigo: 9,
      nome: 'Charlie Brown Jr.: Abalando sua Fábrica 2001',
      descritivo: "Punk Rock e Hardcore melódico em 12 faixas. 'Lugar ao Sol' sendo a mais conhecida.",
      valor: 200.0,
      quantidade: 1,
      gravadora: 'Virgin Records',
      faixas: ['Abalando Sua Fábrica', 'Lugar ao Sol', 'O Cão e o Gato', 'Não é Sério', 'Rubão', 'Papo Reto', 'Ela Vai Embora', 'Só os Loucos Sabem', 'Champagne', 'Dias de Luta, Dias de Glória', 'Ponha Seu Elmo', 'Saudade'],
    },
    {
      codigo: 10,
      nome: 'Bob Marley: The Best of Bob Marley 1984',
      descritivo: "16 faixas com o melhor da lenda jamaicana. 'Is This Love', 'No Woman, No Cry' e 'Could You Be Loved'.",
      valor: 180.0,
      quantidade: 2,
      gravadora: 'Island Records',
      faixas: ['Is This Love', 'No Woman, No Cry', 'Could You Be Loved', 'Three Little Birds', 'Buffalo Soldier', 'Get Up, Stand Up', 'Stir It Up', 'One Love / People Get Ready', 'I Shot the Sheriff', 'Waiting in Vain', 'Redemption Song', 'Satisfy My Soul', 'Exodus', 'Jamming', 'Lively Up Yourself', 'Trenchtown Rock'],
    },
    {
      codigo: 11,
      nome: 'Tyler, The Creator: Igor 2019',
      descritivo: "Mistura RAP, JAZZ, FUNK, GOSPEL. 12 faixas com 'Earfquake' sendo a mais famosa.",
      valor: 250.0,
      quantidade: 6,
      gravadora: 'Columbia Records',
      faixas: ["Igor's Theme", 'Earfquake', 'I Think', 'Exactly What You Run From...', 'Running Out of Time', 'New Magic Wand', 'A Boy Is a Gun*', 'Puppet', "What's Good", 'Gone, Gone / Thank You', "I Don't Love You Anymore", 'Are We Still Friends?'],
    },
    {
      codigo: 12,
      nome: 'Toca-discos Crosley Keepsake',
      descritivo: 'Um toca-discos simples, porém muito elegante.',
      valor: 800.0,
      quantidade: 5,
      gravadora: 'Crosley',
      faixas: [],
    },
  ];

  listaBusca = this.lista;
  busca: any = '';

  constructor(private route: ActivatedRoute, public router: Router) {
    this.busca = this.route.snapshot.queryParamMap.get('busca');
    if (this.busca) {
      this.fazerBusca(this.busca);
    }
  }

  fazerBusca(event: any) {
    this.busca = event;
    this.listaBusca = this.lista.filter((item) =>
      item.nome.toLowerCase().includes(event.toLowerCase()),
    );
  }

  limparBusca() {
    this.listaBusca = this.lista;
    this.busca = '';
    this.header.limparInput();
  }

  irParaDetalhe(item: any) {
    localStorage.setItem('selecionado', JSON.stringify(item));
    this.router.navigate(['/detalhe']);
  }

  irParaCesta(obj: any) {
    const dados = localStorage.getItem('cesta');
    let cesta: any[] = dados ? JSON.parse(dados) : [];
    const existe = cesta.find((i) => i.codigo === obj.codigo);
    if (existe) {
      existe.qtd += 1;
    } else {
      cesta.push({ ...obj, qtd: 1 });
    }
    localStorage.setItem('cesta', JSON.stringify(cesta));
    alert(`"${obj.nome}" adicionado à cesta!`);
    this.router.navigate(['/cesta']);
  }
}