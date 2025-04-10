import { Component } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, UserComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-udemy';
}
