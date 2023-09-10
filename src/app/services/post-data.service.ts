import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {


  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }

  createPost(post:any) {
    return this.http.post(`${this.url}/posts`, post);
  }

  updatePost(id:number, post:any) {
    return this.http.patch(`${this.url}/posts/${id}`, post);
  }

  deletePost(id:number) {
    return this.http.delete(`${this.url}/posts/${id}`);
  }

  getCommentsByPostId(pid:number)
  {
    return this.http.get(`${this.url}/comments?postId=${pid}`);
  }


}
