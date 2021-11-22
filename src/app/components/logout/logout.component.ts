import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private webSocketService:WebSocketService) { }

  ngOnInit(): void {
  }

  ngOnLogout(){
    localStorage.removeItem('auth-token');
    this.webSocketService.disconnect();
  }

}
