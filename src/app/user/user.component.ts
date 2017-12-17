import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import {User} from './user';
//import {UserHis} from './user-his';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] ,
  providers:[UserDataService]
})
export class UserComponent implements OnInit {
  userList:Array<User>=[];
  errorMsg:String = '' ;
  searchUser:User = new User();
  constructor(private uds: UserDataService ) {

    //this.getUsers();
   }


  getUsers():void { 

    this.uds.getUsers(this.searchUser).subscribe ( 
      datas => {
        console.log(datas) ; 
        this.userList = datas["list"];
      } ,
      error => {
        this.errorMsg = <any>error ; 
        alert(this.errorMsg);
      }

    ) ;
   }
  ngOnInit() 
  {

  }

}
