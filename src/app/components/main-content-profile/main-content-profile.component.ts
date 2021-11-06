import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Traveler } from '../../models/traveler.model';
import { TravelerService } from '../../services/traveler.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content-profile',
  templateUrl: './main-content-profile.component.html',
  styleUrls: ['./main-content-profile.component.css']
})
export class MainContentProfileComponent implements OnInit {

  traveler:Traveler = {};
  validUser:any;
  date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,  
    private travelerService: TravelerService,
    private userService: UserService,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.isLogedIn();

    let traveler_id = this.activatedRoute.snapshot.params.id;
    this.getOneTraveler(traveler_id);
  }

  getOneTraveler(traveler_id: string){
    this.travelerService.getOneTraveler(traveler_id)
    .subscribe(
      res => this.traveler = res,
      error =>{ 
        console.log(error);
        this.router.navigate(['/404']);
      }
    )
  }

  isLogedIn(){
    this.userService.isValiduser().subscribe(
      res => {
        this.validUser = res;
        console.log(res);
      },
      err => {
        localStorage.removeItem('auth-token');
        this.router.navigate(['/sign-in']);
      }
    );
  }

  isUserProfile(){
    if(this.validUser.traveler_id == this.activatedRoute.snapshot.params.id){
      return true;
    }else{
      return false;
    }
  }

}
