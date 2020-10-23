import { Component, OnInit } from '@angular/core';

//import { Media, MediaObject } from '@ionic-native/media/ngx';
//import { HttpClient } from '@angular/common/http';

//import { StreamingMediaOriginal, StreamingAudioOptions } from '@ionic-native/streaming-media';
////import { Platform } from '@ionic/angular';

import { Howl } from 'howler';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //@ViewChild('audioplayer') aaa: any;
  isPlaying: boolean;
  private sound: Howl;
  
  constructor() {

  }

    ngOnInit () {
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
       usingWebAudio: true
       //autoplay: true,
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
   }
  }

