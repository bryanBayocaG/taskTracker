import { Component } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, UserComponentComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  select(id: string) {
    this.selectedUserId = id;
  }
}
