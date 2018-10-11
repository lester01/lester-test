import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService, private location: Location) { }


  ngOnInit() {
    
  }
 
  goBack() {
    this.location.back();
  }

  addPost(title, body){
    console.log(title, body);
    this.postService.savePost({title, body} as Post).subscribe(() => this.location.back(), post => {
        this.posts.push(post);
        
      })
      //this.location.back();
  }

  // onNewPost(post: Post){
  //   this.post.unshift(post);
  // }

  // onUpdatedPost(){
  //   this.post.forEach((cur, index) => {
  //     if (this.post[index].id === cur.id){
  //       this.post.splice(index, 1);
  //       this.post.unshift(cur);
  //       this.isEdit = false;

  //       this.currentPost = {
  //         id: 0,
  //         title: '',
  //         body: ''
  //       }
  //     }
  //   })
  // }

}