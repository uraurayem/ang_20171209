import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Depart } from './../depart/depart';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DepartUpdateService {

  url: string = "http://localhost:3000/";

  departList:Array<Depart> = [] ;
  
  private headers = new Headers();
  
  constructor(protected _http:Http) {
    
    this.headers.append('Content-Type', 'application/json;charset=utf-8');
    this.headers.append('Accept','application/json;charset=utf-8'); 
  }

  // addDepart(di:Depart) :Observable <any> { 
  //   let url:string = "api/depart?name=test&diname=ditest";
  
  //   return this._http.get( this.url + url ) ;
  //   // this.departList.push(di); 
  // }

  updateDepartPost(di:Depart) :Observable <any> { 
    let url:string = "api/departs/update";
    return this._http.post( this.url + url  , di ) ;
  }
  getDepart(diNo:number):Observable <any> { 
    let url:string = "api/departs/" + diNo ;
    return this._http.get( this.url + url  ) ;
  }
  
  // getDepartList(diNo:string):Observable<any>{
  //   let url:string = "api/departs/"+diNo ; 
  //   return this._http.get(this.url + url ) ;
  // }
  
  // deleteDeaprt(dino:number) :Observable <any> { 
  //   let url:string ="api/departs/" + dino ; 
  //   return this._http.delete(this.url+ url);
  // }
}
