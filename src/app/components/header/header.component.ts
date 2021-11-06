import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, 
    private webSocketService:WebSocketService) { }

  ngOnInit(): void {
  }

  
  onSignOut(): void {
    localStorage.removeItem('auth-token');
    this.router.navigate(['/']);
    this.webSocketService.disconnect();
  }

}
