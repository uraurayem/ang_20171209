import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common/common-service.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from'../user';

@Injectable()
export class UserDepartService extends CommonServiceService{
  private usersUrl:string="http://localhost:3000/api/userdeparts";

  constructor(protected _http:Http) {
    super(_http);
  }
  
  getUserList():Observable<User[]> { 
    let url :string = this.usersUrl  ;
    return super.getJson(url);
  }


  updateUser(user:User):Observable<any> { 
    let url :string = this.usersUrl +"/update"  ;

    return super.postJson(url, user );
  }

  insertUser(user:User):Observable<any> { 
    let url :string = this.usersUrl +"/insert" ;
    
    return super.postJson(url, user );
  }

  deleteUser(userNo:number):Observable<any> { 
    let url :string = this.usersUrl +"/"+ userNo ;
    
    return this._http.delete( url );
  }

  // getDepartList():Observable<any>{
  //   let url:string = this.usersUrl+ "/departs" ; 
  //   return super.getJson(url) ;
  // }
}
