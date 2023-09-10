import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-data-api',
  templateUrl: './post-data-api.component.html',
  styleUrls: ['./post-data-api.component.css']
})
export class PostDataApiComponent implements OnInit {

  posts:any[]=[];
  isModalOpen = true;
  selectedPost:any={};

  id:any="";
  title:any="";
  description:any="";
  author:any="";
  isNew:boolean=true;
  comments:any[]=[];
  constructor(private postDataServie:PostDataService) {
      }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postDataServie.getPosts().subscribe((data: any) => this.posts = data);
  }

  createPost() {
    const post:any = {'title':this.title, 'description': this.description, 'author': this.author};
    this.postDataServie.createPost(post).subscribe(() => this.loadPosts());
    Swal.fire('Saved!', 'Post has been saved.', 'success');
  }

  updatePost(id:number) {
     let newpost = {...this.selectedPost};
      if(this.title)
        newpost.title=this.title
      if(this.description)
        newpost.description=this.description
      if(this.author)
        newpost.author=this.author

    this.postDataServie.updatePost(id, newpost).subscribe(() => this.loadPosts());
    Swal.fire('Saved!', 'Post has been updated.', 'success');

  }

  deletePost(id:number) {

    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this post?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          this.postDataServie.deletePost(id).subscribe(() => this.loadPosts());
            Swal.fire('Deleted!', 'Post has been deleted.', 'success');
        }
      });
  }


  editButtonClicked(post:any)
  {
    const index = this.posts.findIndex(pt=> pt.id === post.id );
    this.selectedPost = this.posts[index];
    this.isNew=false;

  }

  getCommentsByPostId(pid:number)
  {
     this.postDataServie.getCommentsByPostId(pid).subscribe((response:any) => {
       this.comments = response;
       console.log(response);
     })

  }

}
