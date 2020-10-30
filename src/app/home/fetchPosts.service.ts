
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {Post} from './Post.interface';
//import {SinglePost} from './SinglePost.interface';
//import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root',
})
export class FetchPosts {
   posts = new Subject<any>();

   api = 'https://api.rotblau.app/news/?orderBy=[%22published:DESC%22]&limit=3';

    constructor(private http: HttpClient){}

    fetchPosts() {
        this.http.get<Post>(this.api).subscribe((responseData) => {
             let response = responseData.data.items;
             this.posts.next(response);
           /// let title = responseData.data.items;
            //let published = responseData.data.items;
            //let lead = responseData.data.items;
            //let newPost = {title, published, lead};
           // this.post.next(newPost);
            //return {title, published, lead};
            //this.http.get('https://api.rotblau.app/news/?orderBy=[%22published:DESC%22]&limit=3').subscribe((dataa) => {console.log(dataa)});
          });

    }
}