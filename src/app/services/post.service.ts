import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private env = environment;

  
  constructor(private http:HttpClient) { }

  public getAllPosts():Observable<Post[]>{
    let data = this.http.get<Post[]>(this.env.postsUrl+"?r=y")
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public getAllPostsByID(traveler_id:string):Observable<Post[]>{
    let data = this.http.get<Post[]>(this.env.postsUrl+"/"+traveler_id)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public getOnePost(post_id:string):Observable<Post>{
    let data = this.http.get<Post>(this.env.postsUrl+"/"+post_id)
    .pipe(catchError(this.handleError));
    return (data);
  }
  
  public Post(body:any):Observable<Post>{
    let userUrl = this.env.postsUrl;
    let data= this.http.post<Post>(userUrl,body)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  public postImage(formData:FormData):Observable<any>{
    let userUrl = this.env.imagesUrl;
    let data= this.http.post<FormData>(userUrl,formData)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  public likePost(post_id:string):Observable<any>{
    let userUrl = this.env.postsUrl+"/like/"+post_id;
    let data= this.http.put<any>(userUrl,{})
    .pipe(catchError(this.handleError));
    return(data); 
  }


  public editOnePost(post_id:string, body:{}):Observable<Post>{
    let userUrl = this.env.postsUrl+"/"+post_id;
    let data= this.http.put<Post>(userUrl,body)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  public deletePost(post_id:any):Observable<Post>{
    let userUrl = this.env.postsUrl+"/"+post_id;
    let data= this.http.delete<Post>(userUrl)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")
  }

}
