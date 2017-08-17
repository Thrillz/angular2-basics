import { Component } from '@angular/core';

import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: string = "Hello!";
  users: User[] = [
    {id: 10, name: "Uche", username: "Dad-Vader"},
    {id: 11, name: "Dami", username: "Damiboy"},
    {id: 12, name: "Tboy", username: "Obi-million"}
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    console.log(event);
    this.users.push(event.user);
  }
}
