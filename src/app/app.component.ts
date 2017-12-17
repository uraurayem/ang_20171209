import { Component } from '@angular/core';
import {User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  userList:Array<User> = []; 
  
  userName:string = "" ;
  userAge:number = 0;

  constructor(){
   
  }
  addUser():void {
  
    var user :User = new User() ; 
    user.userName = this.userName ;
    user.userAge = this.userAge;

    this.userList.push(user);
  }
  test() : void {

    var user1:User = new User();
    user1.userName = '미선';
    user1.userAge = 5;
    this.userList.push(user1);

    user1 = new User();
    user1.userName = '미선2';
    user1.userAge = 6;
    this.userList.push(user1);

  }

}

