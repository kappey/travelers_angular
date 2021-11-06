import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private userService:UserService) { }

  intercept(req:any, next:any){
    // intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders:{
        authorization: `Bearer ${this.userService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

}
