import { Component } from '@angular/core';
import { MainNoticesComponent } from "../../components/main-notices/main-notices.component";
import { RelevantNoticeComponent } from "../../components/relevant-notice/relevant-notice.component";
import { AsideNoticesComponent } from "../../components/aside-notices/aside-notices.component";
import { Post } from '../../models/Post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNoticesComponent, RelevantNoticeComponent, AsideNoticesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  postsAside: Post[] = [
    {
      categories: ["Games", "Geek"],
      title: "O Impacto dos E-Sports",
      date: "2024-11-04",
      author: "Gustavo Oliveira",
      description: "Como os e-sports estão moldando a indústria do entretenimento.",
      img_url: "image9.png"
    },
    {
      categories: ["Geek"],
      title: "História do Universo de Star Wars",
      date: "2024-11-03",
      author: "Carla Menezes",
      description: "Uma viagem pela história da saga mais famosa do universo geek.",
      img_url: "image8.png"
    },
    {
      categories: ["Games"],
      title: "Melhores Jogos Indie de 2024",
      date: "2024-11-02",
      author: "João Alves",
      description: "Descubra os jogos indie que fizeram sucesso neste ano.",
      img_url: "image7.png"
    },
    {
      categories: ["Games", "Geek"],
      title: "O Impacto dos E-Sports",
      date: "2024-11-04",
      author: "Gustavo Oliveira",
      description: "Como os e-sports estão moldando a indústria do entretenimento.",
      img_url: "image5.png"
    },
    {
      categories: ["Geek"],
      title: "A Evolução dos Filmes de Super-Heróis",
      date: "2024-11-05",
      author: "Ana Pereira",
      description: "Uma análise sobre como os filmes de super-heróis mudaram ao longo dos anos.",
      img_url: "image4.png"
    },
  ];

  postsMain: Post[] = [
    {
      categories: ["Geek", "Games"],
      title: "Tendências Geek para 2025",
      date: "2024-11-07",
      author: "Maria Silva",
      description: "O que esperar do futuro da tecnologia e dos games no mundo geek.",
      img_url: "image1.png"
    },
    {
      categories: ["Games"],
      title: "Os Melhores Jogos de 2024",
      date: "2024-11-06",
      author: "Lucas Souza",
      description: "A lista dos jogos mais aguardados e jogados de 2024.",
      img_url: "image2.png"
    }
  ];

  postImportant: Post = {
    categories: ["Geek", "Games"],
    title: "Novidades no Mundo Geek",
    date: "2024-11-11",
    author: "Fulano de Tal",
    description: "Exploramos as últimas novidades e tendências no universo geek.",
    img_url: "image3.png"
  };
}
