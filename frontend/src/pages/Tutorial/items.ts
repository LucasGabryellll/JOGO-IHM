type Props = {
  id: number;
  title: string;
  description?: string;
  img: string
}

import tabuleiro from "../../assets/tutorial/tela_game.png";
import pontos from "../../assets/tutorial/pontos.png";
import cards from "../../assets/tutorial/cartas.png";
import casas from "../../assets/tutorial/casas.png";

const help_items: Props[] = [
  {
    id: 1,
    title: 'OBJETIVO',
    description: 'SEU OBJETIVO É MOVER SUA PEÇA ATÉ O FINAL DO TABULEIRO.',
    img: tabuleiro
  },

  {
    id: 2,
    title: 'LOCOMOÇÃO',
    description: 'PARA SE MOVIMENTAR NO MAPA VOCÊ TERA QUE SELECIONAR UMA CARTA, QUE LHE DARÁ PONTOS PARA AVANÇAR',
    img: cards
  },

  {
    id: 3,
    title: 'TIPOS DE CASAS',
    description: 'EXISTEM 3 TIPOS: AS NORMAIS, COM DESAFIOS E DE AVANÇAR. CASO VOCÊ CAIA EM UMA DE DESAFIO, IRÁ APARECER UM DESAFIO NA TELA PARA SE COMPLETAR.',
    img: casas
  },

  {
    id: 4,
    title: 'PONTUAÇÃO',
    description: 'A PONTUAÇÃO SERÁ FEITA COM BASE NAS PERGUNTAS RESPONDIDAS POR CADA ADVERSÁRIO, SE ACERTAR IRÁ GANHAR UMA QUANTIDADE DE PONTOS DE ACORDO COM A DIFICULDADE DA PERGUNTAR;',
    img: pontos
  },
];

export {
  help_items
}