import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Router } from '@angular/router';

import { TravelerService } from '../../services/traveler.service';
import { UserService } from '../../services/user.service';
import { Traveler } from '../../models/traveler.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  time = interval(10000);
  traveler = new Traveler();
  validUser : any;

  constructor(
    private readonly geolocation$: GeolocationService, 
    private travelerService: TravelerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.isLogedIn()
   

    setInterval(() => {
      this.geolocation$.subscribe(position => this.setLocation(position));
        this.travelerService.editOneTraveler("",this.traveler);
    }, 60000);
  }

  setLocation(position: GeolocationPosition){
   
    this.traveler.latitude =  (Math.random() * 7) + 29;
    this.traveler.longitude =   (Math.random() * 3) + 34;
    console.log("lat: " + this.traveler.latitude);
    console.log("long: " + this.traveler.longitude);
    // this.traveler.latitude = position.coords.latitude;
    // this.traveler.longitude = position.coords.longitude;
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

}
