import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { Image } from 'src/app/models/image.model';
import { Traveler } from '../../models/traveler.model';
import { Router } from '@angular/router';

import { TravelerService } from '../../services/traveler.service';
import { PostService }  from '../../services/post.service';
import { ImageService }  from '../../services/image.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-main-content-feed',
  templateUrl: './main-content-feed.component.html',
  styleUrls: ['./main-content-feed.component.css']
})
export class MainContentFeedComponent implements OnInit {

  private env = environment;

  travelers:Traveler[] = [];
  traveler:Traveler = {};
  image:Image = {};
  posts:Post[] = [];
  validUser:any;

  constructor( 
    private travelerService: TravelerService,
    private postService: PostService,
    private imageService: ImageService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.isLogedIn();
    this.getAllTravelers();
    this.getAllPosts();
  }

  isLogedIn(){
    this.userService.isValiduser().subscribe(
      res => {
        this.validUser = res;
        return true;
      },
      err => {
        localStorage.removeItem('auth-token');
        this.router.navigate(['/sign-in']);
        return true;
      }
    );
  }

  getAllTravelers(){
    this.userService.isSignedIn
    this.travelerService.getAllTravelers()
    .subscribe(
      res => this.travelers = res,
      error => console.log(error)
    )
  }

getAllPosts(){
  this.postService.getAllPosts()
  .subscribe(
    res  => {
      this.posts = res;
      this.posts.forEach(p => {
        this.travelerService.getOneTraveler(p.traveler_id)
        .subscribe(
          res => {
            this.traveler = res;
            p.fullName = this.traveler.firstName + " " + this.traveler.lastName
          },
          error => console.log(error)
        );

          /*  array of images */
        p.images?.forEach(i => {
          console.log("i: ", i);
          this.imageService.getOneImage(i)
          .subscribe(
            res => {
              this.image = res;
              p.path = this.image.filePath
            },
            error => console.log(error)
          )
        })
      })
    },
    error => console.log(error)
  )

}

getOneTraveler(traveler_id: any){
  this.travelerService.getOneTraveler(traveler_id)
  .subscribe(
    res => this.traveler = res,
    error => console.log(error)
  )
}

// edidOnePost(traveler_id: any){
//   this.postService.editOnePost(traveler_id.)
//   .subscribe(
//     res => this.traveler = res,
//     error => console.log(error)
//   )
// }

deleteOneTraveler(post: Post){
  let deletedPost: Post;
  let deletedimage: Image;
  if (confirm('Are you sure you want to delete this post?')) {
    this.postService.deletePost(post._id)
  .subscribe(
    res => {
      deletedPost = res;
      console.log("deletedPost: "+deletedPost);
    },
    error => console.log(error)
  )

  this.imageService.deleteImage(post.images)
  .subscribe(
    res => {
      deletedimage = res;
      console.log("deletedimage: "+ deletedimage);
    },
    error => console.log(error)
  )
  this.ngOnInit();
    console.log('Post was deleted succefully.');
  }
}

onLike(post_id: any){
  let like_unlike;
  this.postService.likePost(post_id)
  .subscribe(
    res => {
      like_unlike = res;
      console.log(like_unlike);
      this.ngOnInit();
    },
    error => console.log(error)
  )
}

}


