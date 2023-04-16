import { Component,OnInit} from '@angular/core';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  constructor(private userService:UserService){

  }
  user!: {
    id: string;
    name: string;
    actualName: string;
    displayName: string;
  } ;
  ngOnInit(): void {
    this.userService.onShowClicked.subscribe((data:{
      id: string,
      name: string,
      actualName: string,
      displayName: string
    })=>{
      this.user=data;
    })
  }
}
