import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css',
})
export class UserComponentComponent {
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
