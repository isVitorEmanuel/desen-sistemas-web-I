import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(private location: Location) {  }

  ngOnInit(): void {
    this.post = history.state.post;
    console.log(this.post);
  }

  returnToPage() {
    this.location.back();
  }
}
