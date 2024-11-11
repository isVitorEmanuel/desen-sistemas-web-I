import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { GeekComponent } from './pages/geek/geek.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'geek', component: GeekComponent },
  { path: 'post', component: PostComponent }
];
