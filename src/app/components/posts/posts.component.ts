import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { ActivatedRoute, Router } from '@angular/router';

import { PostDB } from '../../models/post.model';
import { PostService }  from '../../services/post.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  newPost = new PostDB();
  // newPost = new Post();

  url = "";
  file: any;
  validUser : any;
  formData = new FormData();
  

  constructor(
    private readonly geolocation$: GeolocationService,
    private postService: PostService,
    private router: Router
    ) {}


    public selectFile(event:Event) {
      this.file = event.target as HTMLInputElement;
      if(this.file.files){
        let reader = new FileReader();
        reader.readAsDataURL(this.file.files[0]);
        reader.onload = (event:any)  => {
          this.url = event.target.result;
   
          let fileUpload = this.file.files[0];
          this.formData.append('file', fileUpload, fileUpload.name);
        }
      }

    }

  ngOnInit(): void {
  //  this.isLogedIn();
   this.geolocation$.subscribe(position => this.setLocation(position));
  }

  setLocation(position: GeolocationPosition){
    this.newPost.latitude = position.coords.latitude;
    this.newPost.longitude = position.coords.longitude;
    // this.newPost.latitude = 32.058427;
    // this.newPost.longitude = 34.761969;
    // this.newPost.latitude =  Math.random() * 90;
    // this.newPost.longitude =  Math.random() * 90;
    console.log("cureent location",this.newPost.latitude,this.newPost.longitude);
  }

  onPost(): void{
    this.postService.postImage(this.formData)
    .subscribe((data) => {
      this.newPost.images = data;
      this.completeUpload();
    }, (error) => {
      console.log(error)
    });
  }


  completeUpload() : void{
    console.log("coplete proccess started: ", this.newPost)
    this.postService.Post(this.newPost)
    .subscribe((data) => {
    console.log(data);
    window.location.reload();
    }, (error) => {
    console.log(error)
    });
  }
}
