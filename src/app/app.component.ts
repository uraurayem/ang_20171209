import { Component } from '@angular/core';
import {User } from './user/user';
import { CommonServiceService } from './common/common-service.service';
import { RouterLink } from '@angular/router/src/directives/router_link';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user:User ;
  
  // userName:string = "" ;
  // userAge:number = 0;

  rlList:Array<RouterLink> = [] ; 
  constructor(private css:CommonServiceService){
    this.user = new User(); 
    this.user.userId = "test";
    this.user.userName = "테스트" ;
    sessionStorage.setItem("user", JSON.stringify(this.user));
    let url ="http://localhost:3000/api/menus" ;
    this.css.getJSON(url).subscribe(
      res => {
        this.rlList = res.list; 
        console.log(this.rlList);
      }
    );
    //css.
    this.getMenus();
  }
  addUser():void {
  
    // var user :User = new User() ; 
    // user.userName = this.userName ;
    // user.userAge = this.userAge;

    // this.userList.push(user);
  }
  test() : void {

    // var user1:User = new User();
    // user1.userName = '미선';
    // user1.userAge = 5;
    // this.userList.push(user1);

    // user1 = new User();
    // user1.userName = '미선2';
    // user1.userAge = 6;
    // this.userList.push(user1);

  }
  getMenus():void { 
    
  }


}

