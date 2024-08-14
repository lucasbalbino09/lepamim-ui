import { Component } from '@angular/core';
import { Livro } from '../../model/livro';
import { Brincadeira } from '../../model/brincadeiras';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss',
})
export class PainelComponent {
  livrosDestaques: Livro[] = [
    {
      capa: 'https://m.media-amazon.com/images/I/81fXBeYYxpL._AC_UF1000,1000_QL80_.jpg',
      titulo: 'O Pequeno principe',
      url: 'https://maisdiferencas.org.br/wp-content/themes/maisdiferencas/downloads/o_pequeno_principe/original.pdf',
      sinopse:
        'Um piloto cai com seu avião no deserto e ali encontra uma criança loura e frágil. Ela diz ter vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois repensam os seus valores e encontram o sentido da vida.',
      anoLancamento: 1943,
    },
    {
      capa: 'https://image.slidesharecdn.com/revistamonica-130820145934-phpapp02/85/Revista-Turma-da-Monica-cuidando-do-mundo-1-320.jpg',
      titulo: 'Turma da Mônica ',
      url: 'https://educacao.massaranduba.org/wp-content/uploads/2020/11/GIBI-DA-MONICA.pdf',
      sinopse:
        'Na aventura, os personagens falam sobre erosão nos rios, lixo descartado de forma incorreta, queimadas, além de poluição, enchentes, aquecimento global e consumo consciente. Mônica e companhia também explicam o que é a Rio+20 e como a conferência influenciará a busca global pela sustentabilidade nos próximos anos.',
      anoLancamento: 2012,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/911o1h5gIzL._AC_UF1000,1000_QL80_.jpg',
      titulo: 'O Menino Maluquinho',
      url: 'https://contranarrativas.wordpress.com/wp-content/uploads/2019/02/ziraldo-o-menino-maluquinho.pdf',
      sinopse:
        'O Menino Maluquinho é um garoto normal, feliz e bem cuidado por sua família que, enquanto aproveita a infância brincando na rua com a turma, observa o mundo que o cerca e aprende a lidar com a vida.',
      anoLancamento: 1980,
    },
  ];

  dinamicas: Brincadeira[] = [
    {
      titulo: 'Construção Cooperativa',
      duracao: 30,
      faixaEtaria: ' de 6 a 8 anos. ',
      descricaoAtividade:
        'O objetivo é construir algo juntos, mas com uma regrinha especial: cada membro do grupo só pode usar uma mão para construir.',
      objetivo:
        'Incentivar o trabalho em equipe, colaboração, e comunicação entre as crianças.',
      qtdParticipantes: 6,
      materialdaDinamica: [
        'Blocos de construção (tipo Lego ou outro tipo de bloco)',
        'Folhas de papel e canetas',
        'Relógio ou cronômetro',
        'Uma mesa grande ou espaço no chão',
      ],
    },
    {
      titulo: 'Caça ao Tesouro Cooperativa',
      duracao: 40,
      faixaEtaria: 'de 7 a 9 anos.',
      descricaoAtividade:
        'As crianças devem trabalhar juntas para encontrar pistas e resolver enigmas até encontrar o tesouro escondido.',
      objetivo:
        'Promover a cooperação, resolução de problemas em grupo, e comunicação eficaz.',
      qtdParticipantes: 8,
      materialdaDinamica: [
        'Pistas e enigmas escritos em papéis',
        'Tesouro escondido (pode ser uma caixa com guloseimas ou brinquedos)',
        'Espaço amplo para esconder as pistas',
      ],
    },
    {
      titulo: 'Desenho Coletivo',
      duracao: 25,
      faixaEtaria: 'de 6 a 8 anos.',
      descricaoAtividade:
        'As crianças se revezam para desenhar partes de uma imagem em uma folha grande, sem que o próximo desenhista veja o que foi desenhado antes.',
      objetivo:
        'Estimular a criatividade, trabalho em equipe, e a colaboração criativa.',
      qtdParticipantes: 5,
      materialdaDinamica: [
        'Folha de papel grande (tipo cartolina)',
        'Canetas ou lápis coloridos',
        'Barreira para cobrir parte do desenho (uma folha ou pano)',
      ],
    },
    {
      titulo: 'Corrida de Balões',
      duracao: 20,
      faixaEtaria: 'de 6 a 8 anos.',
      descricaoAtividade:
        'Cada equipe deve levar um balão de um lado ao outro de uma linha de chegada sem usar as mãos, apenas soprando ou empurrando com a cabeça.',
      objetivo:
        'Incentivar a cooperação, coordenação motora, e o trabalho em equipe.',
      qtdParticipantes: 10,
      materialdaDinamica: [
        'Balões coloridos',
        'Linha de chegada (pode ser uma fita no chão)',
        'Espaço amplo para a corrida',
      ],
    },
  ];
}
