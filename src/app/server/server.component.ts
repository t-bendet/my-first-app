import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  // color = '';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // this.color = this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    // this.color = this.serverStatus === 'online' ? 'green' : 'red';
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
