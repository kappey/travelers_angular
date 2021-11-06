import { Component, OnInit } from '@angular/core';

import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private webSocketService:WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.setupSocketConnection();
  }

}
