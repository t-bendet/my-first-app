import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = 'tal';
  // runs when the component loads
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = `Server was created! ${this.serverName}`;
  }
  isUsernameEmpty() {
    return this.userName ? false : true;
  }
  resetUsername() {
    this.userName = '';
  }
  // onUpdateServerName(event) {
  //   console.log(event.target.value);
  //   this.serverName = event.target.value;
  // }
}
