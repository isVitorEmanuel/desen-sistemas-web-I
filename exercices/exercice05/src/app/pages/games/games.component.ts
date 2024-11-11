import { Component } from '@angular/core';
import { MainNoticesComponent } from '../../components/main-notices/main-notices.component';
import { AsideNoticesComponent } from '../../components/aside-notices/aside-notices.component';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MainNoticesComponent, AsideNoticesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  postsMain: Post[] = [
    {
      categories: ["Games"],
      title: "Os Melhores Jogos de 2024",
      date: "2024-11-06",
      author: "Lucas Souza",
      description: "A lista dos jogos mais aguardados e jogados de 2024.",
      img_url: "image9.png"
    },
    {
      categories: ["Games"],
      title: "Jogos Inovadores",
      date: "2024-11-09",
      author: "Beltrano de Tal",
      description: "Exploramos os jogos mais inovadores do ano.",
      img_url: "image5.png"
    },
    {
      categories: ["Games"],
      title: "Jogos e Mercado de Trabalho",
      date: "2024-11-04",
      author: "Gustavo Oliveira",
      description: "Como jogos podem ser utilizados no mercado de trabalho.",
      img_url: "image8.png"
    }
  ];

  postsAside: Post[] = [
    {
      categories: ["Games"],
      title: "O Impacto dos E-Sports",
      date: "2024-11-04",
      author: "Gustavo Oliveira",
      description: "Como os e-sports estão moldando a indústria do entretenimento.",
      img_url: "image3.png"
    },
    {
      categories: ["Games"],
      title: "Melhores Jogos Indie de 2024",
      date: "2024-11-02",
      author: "João Alves",
      description: "Descubra os jogos indie que fizeram sucesso neste ano.",
      img_url: "image4.png"
    },
    {
      categories: ["Games"],
      title: "A Revolução dos Jogos em Realidade Virtual",
      date: "2024-11-01",
      author: "Fernanda Lima",
      description: "Como a realidade virtual está mudando a maneira de jogar.",
      img_url: "image1.png"
    },
    {
      categories: ["Games"],
      title: "Jogos de Ação Mais Esperados",
      date: "2024-10-30",
      author: "Ricardo Costa",
      description: "Os jogos de ação mais esperados para o próximo ano.",
      img_url: "image2.png"
    },
    {
      categories: ["Games"],
      title: "A História dos Jogos de Aventura",
      date: "2024-10-28",
      author: "Juliana Rocha",
      description: "Uma análise da evolução dos jogos de aventura ao longo dos anos.",
      img_url: "image3.png"
    },
    {
      categories: ["Games"],
      title: "A Popularização dos Jogos Mobile",
      date: "2024-10-25",
      author: "Carlos Oliveira",
      description: "Como os jogos para dispositivos móveis conquistaram o mercado.",
      img_url: "image7.png"
    }
  ];
}
