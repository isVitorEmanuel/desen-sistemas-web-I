import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-notices',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-notices.component.html',
  styleUrl: './main-notices.component.css'
})
export class MainNoticesComponent {
  @Input() post: Post | undefined;

  submit() {
    console.log(this.post)
  }
}
