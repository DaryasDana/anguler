import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  

  constructor(private _http: HttpClient){}
   getUsers()
  {
    return this._http.get<Post[]>(this.apiUrl)
  }

}


