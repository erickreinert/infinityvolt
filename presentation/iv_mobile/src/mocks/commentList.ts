export interface CommentType {
  id: number;
  user: string;
  comment: string;
  rating: number;
  vehicle: {
    brand: string;
    model: string;
  };
  date: Date;
}

const commentList: CommentType[] = [
  {
    id: 34251,
    user: "Bruno Lima",
    comment:
      "A estrutura física do eletroposto precisa de melhorias; o carregador demorou para iniciar e o ambiente parecia mal cuidado, mas a localização é prática.",
    rating: 2,
    vehicle: {
      brand: "Tesla",
      model: "Model 3",
    },
    date: new Date("2025-01-28"),
  },
  {
    id: 743566,
    user: "Lucas Fernandes",
    comment:
      "Gostei da limpeza e organização do espaço, e os pontos de recarga estão bem distribuídos. Só senti falta de mais opções de tomadas.",
    rating: 4,
    vehicle: {
      brand: "BYD",
      model: "Dolphin Mini",
    },
    date: new Date("2025-01-15"),
  },
  {
    id: 231,
    user: "Mariana Souza",
    comment:
      "O eletroposto é razoável. A qualidade do carregador é boa, mas em alguns momentos percebi pequenos problemas com a velocidade de carregamento.",
    rating: 3,
    vehicle: {
      brand: "GWM",
      model: "ORA 03",
    },
    date: new Date("2025-02-12"),
  },
  {
    id: 456908,
    user: "Camila Ribeiro",
    comment:
      "Excelente experiência! O carregador funcionou super rápido e o local está muito bem iluminado e seguro. Parabéns pela manutenção!",
    rating: 5,
    vehicle: {
      brand: "BYD",
      model: "Seal",
    },
    date: new Date("2025-01-06"),
  },
  {
    id: 345978,
    user: "Eduardo Martins",
    comment:
      "Péssima estrutura. O equipamento apresentava sinais de desgaste e o local estava sujo. Não recomendo esse eletroposto.",
    rating: 1,
    vehicle: {
      brand: "BYD",
      model: "Dolphin",
    },
    date: new Date("2025-02-04"),
  },
];
export default commentList;
