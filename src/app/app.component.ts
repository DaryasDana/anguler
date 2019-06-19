import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Post } from './post.model';
import { User } from './user.model';



import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service'
import {HttpClient} from '@angular/common/http';
import { error } from 'util';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IQ Desk';
  showPosts: boolean;
  posts: Post[];
  showUsers: boolean;
  users: User[];
  
  
  displatedColumns =['name'];

  constructor(private postService: PostService, private userService: UserService ) {}

  ngOnInit() {
    this.showPosts = false;
    this.showUsers = false;

  }

  findEmp(id) {
    alert(`Hello...${id}`);
  }

  getPosts() {
    this.showPosts = true;
    this.showUsers=false;
    this.postService.getUsers().subscribe(
      res => {
        
        this.posts = res;
      },
      error => {
        console.log(error);

      }

    )
    }
    displayedColumns=['name'];
getUsers(){
 
  this.showPosts = false;
  this.showUsers = true;
  
this.userService.getUsers().subscribe(
  data=> {
    this.users = data;
  },
  error => {
    console.log(error);
  }

)
}

}

