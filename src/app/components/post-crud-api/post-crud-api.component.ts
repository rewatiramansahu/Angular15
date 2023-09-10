import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
}


@Component({
  selector: 'app-post-crud-api',
  templateUrl: './post-crud-api.component.html',
  styleUrls: ['./post-crud-api.component.css']
})
export class PostCrudApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  posts: Post[] = [];
  newPostTitle: string = '';


  getPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  addPost() {
    const newPost: Post = {
      id: Date.now(),
      title: this.newPostTitle
    };
    alert(this.newPostTitle);

    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe(() => {
        this.getPosts();
        this.newPostTitle = '';
      });
  }

  editPost(post: Post) {
    // Implement edit functionality
    console.log('Editing post:', post);
  }

  deletePost(postId: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe(() => {
        this.getPosts();
      });
  }

}
