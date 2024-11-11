import { Component } from '@angular/core';
import { AsideNoticesComponent } from '../../components/aside-notices/aside-notices.component';
import { MainNoticesComponent } from '../../components/main-notices/main-notices.component';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-geek',
  standalone: true,
  imports: [AsideNoticesComponent, MainNoticesComponent],
  templateUrl: './geek.component.html',
  styleUrl: './geek.component.css'
})

export class GeekComponent {
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
      categories: ["Geek"],
      title: "O Futuro dos Quadrinhos Digitais",
      date: "2024-11-01",
      author: "Ricardo Costa",
      description: "Como os quadrinhos digitais estão ganhando espaço na indústria geek.",
      img_url: "image7.png"
    },
    {
      categories: ["Geek"],
      title: "Tecnologia de Realidade Aumentada e a Cultura Geek",
      date: "2024-10-30",
      author: "Fernanda Souza",
      description: "O impacto da realidade aumentada em jogos e outras áreas do universo geek.",
      img_url: "image6.png"
    },
    {
      categories: ["Geek"],
      title: "As Melhores Séries de Ficção Científica",
      date: "2024-10-29",
      author: "Thiago Pereira",
      description: "As séries de ficção científica que mais marcaram os fãs da cultura geek.",
      img_url: "image5.png"
    }
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
      categories: ["Geek"],
      title: "A Evolução dos Filmes de Super-Heróis",
      date: "2024-11-05",
      author: "Ana Pereira",
      description: "Uma análise sobre como os filmes de super-heróis mudaram ao longo dos anos.",
      img_url: "image4.png"
    },
  ];
}
