import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css',
})
export class UserComponentComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  get ImagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelect() {
    console.log('Clicked!');
  }
}
