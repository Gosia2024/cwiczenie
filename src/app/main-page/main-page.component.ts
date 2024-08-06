import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  posts: {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
  }[] = [
    {
      name: 'Hans',
      image: './assets/img/banana.jpg',
      likes: 55,
      isLiked: true,
    },
    {
      name: 'Mandy',
      image: './assets/img/orange.jpg',
      likes: 21,
      isLiked: false,
    },
    {
      name: 'Nadine',
      image: './assets/img/currant.jpg',
      likes: 274,
      isLiked: true,
    },
  ];


  toggleLike(index: number) {
    if (this.posts[index].isLiked) {
      this.posts[index].isLiked = false;
      this.posts[index].likes--;
    } else {
      this.posts[index].isLiked = true;
      this.posts[index].likes++;
    }
  }

  constructor() {}


 

  
}
