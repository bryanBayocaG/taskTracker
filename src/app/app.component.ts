import { Component } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, UserComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-udemy';
  users = DUMMY_USERS;
  select(id: string) {
    console.log('User selected: ' + id);
  }
}
