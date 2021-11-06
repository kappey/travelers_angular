import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { WebSocketService } from '../../services/web-socket.service';

import { SignUp } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser = new SignUp();

  constructor(
    private readonly geolocation$: GeolocationService, 
    private userService: UserService,
    private webSocketService:WebSocketService
  ) { }

  ngOnInit(): void {
    this.geolocation$.subscribe(position => this.setLocation(position));
    localStorage.removeItem('auth-token');
    this.webSocketService.disconnect();
  }

  setLocation(position: GeolocationPosition){
    this.newUser.latitude = position.coords.latitude;
    this.newUser.longitude = position.coords.longitude;
    console.log("cureent location",this.newUser.latitude,this.newUser.longitude);
  }

  onSubmit(): void {
    this.userService.signUp(this.newUser).subscribe((data) =>{
      console.log(data)
    }, (error) =>{
      console.log(error)
    });
    console.log(this.newUser);
  }

}
