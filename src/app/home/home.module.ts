import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
//import { FetchPosts } from './fetchPosts.service';
//import { Media } from '@ionic-native/media/ngx';
//import { StreamingMediaOriginal } from '@ionic-native/streaming-media';
//import { HttpClientModule } from '@angular/common/http';
//import { Media } from '@ionic-native/media/ngx';
//import { StreamingMedia } from '@ionic-native/streaming-media';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule 
  ],
  declarations: [HomePage],
  //providers: [FetchPosts]
})
export class HomePageModule {}
