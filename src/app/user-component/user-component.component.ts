import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css',
})
export class UserComponentComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
