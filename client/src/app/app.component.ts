import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtMessage = '';
  socket: any;
  messages: string[] = [];
  constructor() {
    this.socket = io('https://chat1812.herokuapp.com');
    this.socket.on('SERVER_SEND_MESSAGE', message => this.messages.push(message));
  }

  sendMessage() {
    this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
    this.txtMessage = '';
  }
}
