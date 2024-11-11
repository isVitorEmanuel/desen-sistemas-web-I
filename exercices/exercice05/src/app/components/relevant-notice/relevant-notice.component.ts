import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-relevant-notice',
  standalone: true,
  imports: [],
  templateUrl: './relevant-notice.component.html',
  styleUrl: './relevant-notice.component.css'
})

export class RelevantNoticeComponent {
  @Input() post: Post | undefined;
}
