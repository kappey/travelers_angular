import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Image } from '../models/image.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private env = environment;

  constructor(private http:HttpClient) { }

  public getAllImages():Observable<Image[]>{
    let data = this.http.get<Image[]>(this.env.imagesUrl)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public getOneImage(image_id:string):Observable<Image>{
    let data = this.http.get<Image>(this.env.imageUrl+"/"+image_id)
    .pipe(catchError(this.handleError));
    return (data);
  }

  public deleteImage(image_id:any):Observable<Image>{
    let userUrl = this.env.imagesUrl+"/"+image_id;
    let data= this.http.delete<Image>(userUrl)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")
  }

}
