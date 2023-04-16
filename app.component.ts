

import { Component } from '@angular/core';
import { UserService } from './Services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[UserService]
})
export class AppComponent {
  title = 'Interaction';
  constructor(private userService:UserService){

  }
}
