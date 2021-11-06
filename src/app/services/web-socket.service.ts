import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  private env = environment;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(this.env.url);
    this.socket.emit('post', 'Hello there from Angular.');
    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }

}
