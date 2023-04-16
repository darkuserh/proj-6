import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{
  constructor(private userService:UserService){

  }
users:{
  id: string,
  name: string,
  actualName: string,
  displayName: string
}[]=[];
ngOnInit(): void {
  this.users=this.userService.users
}
ShowDetails(user:{
  id: string,
  name: string,
  actualName: string,
  displayName: string
}){
this.userService.ShowUserDetails(user)
}
}
