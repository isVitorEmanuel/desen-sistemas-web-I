import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-notices',
  standalone: true,
  imports: [],
  templateUrl: './aside-notices.component.html',
  styleUrl: './aside-notices.component.css'
})
export class AsideNoticesComponent {

  constructor(private router: Router) {  }

  @Input() post: Post = {
    categories: [],
    title: '',
    date: '',
    author: '',
    description: '',
    img_url: ''
  };

  element(post: Post) {
    console.log(post);
    this.router.navigate(['/post'], { state: { post } });
  }

  button(event: Event, end: String) {
    event.stopPropagation();

    if (end == "Geek") {
      this.router.navigate(['/geek']);
      return;
    }

    this.router.navigate(['/games']);
  }
}
