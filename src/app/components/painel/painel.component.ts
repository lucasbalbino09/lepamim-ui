import { Component } from '@angular/core';
import { Livro } from '../../model/livro';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent {
    livrosDestaques : Livro[] = [
      {
        capa : 'https://m.media-amazon.com/images/I/81fXBeYYxpL._AC_UF1000,1000_QL80_.jpg',
        titulo : 'O Pequeno principe',
        url : 'https://maisdiferencas.org.br/wp-content/themes/maisdiferencas/downloads/o_pequeno_principe/original.pdf',
        sinopse : 'Um piloto cai com seu avião no deserto e ali encontra uma criança loura e frágil. Ela diz ter vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois repensam os seus valores e encontram o sentido da vida.',
        anoLancamento: 1943
      },
      {
        capa : 'https://image.slidesharecdn.com/revistamonica-130820145934-phpapp02/85/Revista-Turma-da-Monica-cuidando-do-mundo-1-320.jpg',
        titulo : 'Turma da Mônica ',
        url : 'https://educacao.massaranduba.org/wp-content/uploads/2020/11/GIBI-DA-MONICA.pdf',
        sinopse : 'Na aventura, os personagens falam sobre erosão nos rios, lixo descartado de forma incorreta, queimadas, além de poluição, enchentes, aquecimento global e consumo consciente. Mônica e companhia também explicam o que é a Rio+20 e como a conferência influenciará a busca global pela sustentabilidade nos próximos anos.',
        anoLancamento: 2012
      },
      {
        capa : 'https://m.media-amazon.com/images/I/911o1h5gIzL._AC_UF1000,1000_QL80_.jpg',
        titulo : 'O Menino Maluquinho',
        url : 'https://contranarrativas.wordpress.com/wp-content/uploads/2019/02/ziraldo-o-menino-maluquinho.pdf',
        sinopse : 'O Menino Maluquinho é um garoto normal, feliz e bem cuidado por sua família que, enquanto aproveita a infância brincando na rua com a turma, observa o mundo que o cerca e aprende a lidar com a vida.',
        anoLancamento: 1980
      }
    ]
}
