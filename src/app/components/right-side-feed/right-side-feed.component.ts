import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { withLatestFrom } from 'rxjs/operators';


import { Traveler } from '../../models/traveler.model';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-right-side-feed',
  templateUrl: './right-side-feed.component.html',
  styleUrls: ['./right-side-feed.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class RightSideFeedComponent implements OnInit {

  travelers:Traveler[] = [];
  latitude:number=31.775320;
  longitude:number=35.296661;
  options: google.maps.MapOptions = {
    center: {lat: this.latitude, lng: this.longitude},
    zoom: 12,
    disableDefaultUI: true,
  };
  markers: any = [
    { position: {lat: 31.774320, lng: 35.216881}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' },
    { position: {lat: 31.773320, lng: 35.226645}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' },
    { position: {lat: 31.785320, lng: 35.236667}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' },
    { position: {lat: 31.755320, lng: 35.246670}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' },
    { position: {lat: 31.725320, lng: 35.256658}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' },
    { position: {lat: 31.795320, lng: 35.266661}, title: 'Im a title' , icon:'../../../assets/icons/travelers logo.png' }
  ];

  constructor(
    private readonly geolocation$: GeolocationService, 
    private travelerService: TravelerService,
  ) { }

  ngOnInit(): void {
    this.getAllTravelers();
    this.geolocation$.subscribe(position => this.setLocation(position));
  }

  setLocation(position: GeolocationPosition){
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("current location",this.latitude,this.longitude);
  }

  // setTravelersLocation(markers){
  //   for(let m of markers){
  //     let position = new google.maps.LatLng(m.lat, m.lng);
  //     let mapMarker = new google.maps.Marker({
  //       position: position,
  //       latitude: m.lat
  //     });
  //   }
  // }

  getAllTravelers(){
    this.travelerService.getAllTravelers()
    .subscribe(
      res => this.travelers = res,
      error => console.log(error)
    )
}

  getUserDetails(){
    this.travelerService.getUserDetails()
  }
}
