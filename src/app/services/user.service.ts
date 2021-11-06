import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import * as User from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private env = environment;

  constructor(private http:HttpClient) { }
  
  public signUp(body:User.SignUp):Observable<User.SignUp>{
    let data=this.http.post<User.SignUp>(this.env.signupUrl, body)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public signIn(body:any):Observable<any>{
    let data=this.http.post<User.SignIn>(this.env.signinUrl, body)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public isValiduser():Observable<any>{
    let data=this.http.get<any>(this.env.validUsersUrl)
    .pipe(catchError(this.handleError)); 
    return(data);
  }

  public isSignedIn(){
    return !!localStorage.getItem('auth-token');
  }

  public handleError(error:any){
    return throwError(error.message || "Server Error")
  }

  public getToken(){
    return localStorage.getItem('auth-token')
  }

}
