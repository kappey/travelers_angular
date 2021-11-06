import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Traveler } from '../models/traveler.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  private env = environment;

  constructor(private http:HttpClient) { }

  public getAllTravelers():Observable<Traveler[]>{
    let data = this.http.get<Traveler[]>(this.env.travelersUrl)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public getOneTraveler(travelerId:any):Observable<Traveler>{
    let data = this.http.get<Traveler>(this.env.travelersUrl+"/"+travelerId)
    .pipe(catchError(this.handleError));
    return (data);
  }

  public getUserDetails():Observable<Traveler>{
    let travelerId = localStorage.getItem('user_id');
    let data = this.http.get<Traveler>(this.env.travelersUrl+"/"+travelerId)
    .pipe(catchError(this.handleError));
    return (data);
  }

  public editOneTraveler(travelerId:string, body:{}):Observable<Traveler>{
    let userUrl = this.env.travelersUrl+"/"+travelerId;
    let data= this.http.put<Traveler>(userUrl,body)
    .pipe(catchError(this.handleError));
    return(data); 
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")
  }

}
