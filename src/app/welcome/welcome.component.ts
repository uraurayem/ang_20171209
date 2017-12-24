import { Component, OnInit } from '@angular/core';
import {User } from './../user/user';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user:User = new User();
  constructor() { 
//html 로드 전 실행

    this.user  =  JSON.parse ( sessionStorage.getItem('user') ) ;
    
  }


  ngOnInit() {
  }

}
