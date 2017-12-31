import { Component, OnInit } from '@angular/core';
import { UserDepartService } from './user-depart.service';
import { User } from '../user';
import { Depart } from '../depart/depart';
import { DepartService } from '../depart/depart.service';

@Component({
  selector: 'app-user-depart',
  templateUrl: './user-depart.component.html',
  styleUrls: ['./user-depart.component.css'],
  providers:[UserDepartService, DepartService]
})
export class UserDepartComponent implements OnInit {

  userList:Array<User> = [] ;
  sesarchText:string = ""; 
  diList:Array<Depart>= [] ;

  isVisibleView:boolean = false ;
  constructor(private uds: UserDepartService, private ds:DepartService ) { 
    
    this.getUserList();

    
  }

  ngOnInit() {

    this.ds.getDepartList('').subscribe (
      res => {
        let result = res.json() ;
        this.diList = result["list"];
        console.log("result getDepart List() => " + result["list"] );
      }
    ); 
  }
  getUserList():void { 
    this.uds.getUserList().subscribe ( 
      res => {
        let result = res ;
        this.userList = result["list"];
      } ,
      error => {
        console.log(<any>error );
      }

    ) ;

  }


  toggleUserView(comnd:string) :void { 

    this.isVisibleView = false ;

    if( comnd == "reload")  {
      this.getUserList();
    }

    
    
  }
  updateCurRow(user:User):void { 
    this.uds.updateUser(user).subscribe ( res => {
      let result = res ;
      if(result["succeed"] == "ok") {
        alert("수정 ok ");
      } else { 
        alert("수정 fail ");
      }
  
     } );
    
  }
  deleteCurRow(userNo:number):void { 
    this.uds.deleteUser(userNo).subscribe (datas => {
      let result = datas.json() ;
      if(result["succeed"] == "ok") {
        alert("삭제 ok ");

        // 재조회
        this.getUserList();
      } else { 
        alert("삭제 fail ");
      }
     } );
  }

  newUser():void { 
    var usr:User = new User();
    this.userList.push(usr);
  }

  insertCurRow(user:User):void { 

    this.uds.insertUser(user).subscribe(res => {
      let result = res ;
      if(result["succeed"] == "ok") {
        alert("입력 ok ");
      } else { 
        alert("입력 fail ");
      }
  
     } );
  }
}
