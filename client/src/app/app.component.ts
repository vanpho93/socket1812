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
  constructor() {
    this.socket = io('http://localhost:3000');
  }

  sendMessage() {
    alert(this.txtMessage);
    this.txtMessage = '';
  }
}
