import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Post } from '../model/Post';;
import { PostService } from '../post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Input() post: Post;
  posts: Post[];
  isEdit: boolean = false;
  // currentPost: Post = {
  //   id: 0,
  //   title: '',
  //   body: ''
  // }

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => 
      this.post = post
      //console.log(this.post);
    );
  }

  goBack() {
    this.location.back();
  }

  editPost(){
    this.postService.updatePost(this.post, this.post.id).subscribe(() => this.location.back());
  }

  deletePost(post: Post) {
    // this.posts = this.posts.filter(p => p !== post);
    this.postService.removePost(post).subscribe(() => this.location.back());

    // this.postService.removePost(post).subscribe(p => {
    //     this.posts.forEach((cur, index) => {
    //       if (post.id === cur.id) {
    //         this.posts.splice(index, 1);
    //         this.isEdit = false;
    //         this.currentPost = {
    //           id: 0,
    //           title: '',
    //           body: ''
    //         }
    //       }
    //     })
    //   })
  }

}