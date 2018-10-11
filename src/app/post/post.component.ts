import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  post: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(post => {
      this.posts = post;
    })
  }

  addPost(title, body){
    console.log(title, body);
    this.postService.savePost({title, body} as Post).subscribe(post => {
        this.posts.unshift(post);
      })
  }

  // onNewPost(post: Post){
  //   this.posts.unshift(post);
  // }

  // editPost(post: Post,id){
  //   this.currentPost = post;
  //   this.isEdit = true;
  // }

  // onUpdatedPost(){
  //   this.posts.forEach((cur, index) => {
  //     if (this.posts[index].id === cur.id){
  //       this.posts.splice(index, 1);
  //       this.posts.unshift(cur);
  //       this.isEdit = false;

  //       this.currentPost = {
  //         id: 0,
  //         title: '',
  //         body: ''
  //       }
  //     }
  //   })
  // }

  // removePost(post: Post){
  //   if (confirm('Are you sure?')){
  //     this.postService.removePost(post).subscribe(p => {
  //       this.posts.forEach((cur, index) => {
  //         if (post.id === cur.id) {
  //           this.posts.splice(index, 1);
  //           this.isEdit = false;
  //           this.currentPost = {
  //             id: 0,
  //             title: '',
  //             body: ''
  //           }
  //         }
  //       })
  //     })
  //   }
  // }
}