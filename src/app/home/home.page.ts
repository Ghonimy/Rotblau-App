
import { Component, OnInit } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';

import { Howl } from 'howler';

//import { Media, MediaObject } from '@ionic-native/media/ngx';

import { FetchPosts} from './fetchPosts.service';
//import {Post} from './Post.interface';
//import { Animation, AnimationController } from '@ionic/angular';
//import { StreamingMediaOriginal, StreamingAudioOptions } from '@ionic-native/streaming-media';
////import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //@ViewChild('audioplayer') aaa: any;
  isPlaying: boolean;
  private sound: Howl;
  firstPost = null;
  secondPost = null;
  thirdPost = null;
  
  
  constructor(private postsService: FetchPosts) {

  }

    ngOnInit () {
      
      this.postsService.fetchPosts();
      
      this.postsService.posts.subscribe((posts) => {
        this.firstPost = posts[0];
        this.secondPost = posts[1];
        this.thirdPost = posts[2];
      });
      
      //const animation: Animation = this.animationCtrl.create()
        //  .addElement(document.querySelector('.animate-left'))
          //.duration(2000).fromTo('opacity', '1', '0.5');

      // this.http.get<any>('https://api.rotblau.app/streams/').subscribe((data) => {
       // this.url = data.data.item[0].url;
       // let audio = new Howl({
       //   src: []
      //  })
     // })
      //this.pf.ready().then(() => {
       // const file: MediaObject = this.media.create('./ImagineDragons-Thunder.mp3');
      //  console.log('hello!');
    //  file.play();
      //file.release();
    //this.http.get<any>('https://api.rotblau.app/streams/').subscribe((data) => { 
      //this.url = data.data.items[0].url;
     // console.log(this.url);
   // });
   this.playAudio();
  }

  playAudio() {
  // const file: MediaObject = this.media.create('../../assets/ImagineDragons-Thunder.mp3');
   //file.onSuccess.subscribe(() => file.play());
   console.log('Playing...!');
 // file.play();
  //file.release();
   // let player = new howl({
     // src: ['./ImagineDragons-Thunder.mp3']
    //});
    //player.play();
   // let options: StreamingAudioOptions = {
    // successCallback: () => console.log('good'),
     // errorCallback: () => console.log('errorrr'),
      //initFullscreen: false
      //this.aaa.nativeElement.play();
      //let audio = new Audio('../../assets/ImagineDragons-Thunder.mp3');
      //audio.play();
      this.sound = new Howl({
       src: ['http://116.202.174.106:8100/live'],
       format: ['mp3'],
       volume: 0.8,
       html5: true,
       preload: true,
       usingWebAudio: true,
       //autoplay: true,
       //autoUnlock: true,
       //autoSuspend: false
      });

      
      //console.log(this.sound.playing());
      this.sound.play();
    //this.aaa.play();
    this.isPlaying = true;
     console.log(this.sound.playing());
    }
   // this.sm.playAudio('../assets/ImagineDragons-Thunder.mp3', options);
    //console.log('lma nshoof');
   stopAudio() {

    this.sound.stop();
    this.isPlaying = false;
    console.log(this.sound.playing());

    

    //this.http.get<Post>(this.api).subscribe(dataa => console.log(dataa.data.items[]));
   }

  }

