import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Depart } from './depart';


@Injectable()
export class DepartService {

  departList:Array<Depart> = [] ;
  
  private headers = new Headers();
  
  constructor(protected _http:Http) {
    
    this.headers.append('Content-Type', 'application/json;charset=utf-8');
    this.headers.append('Accept','application/json;charset=utf-8'); 
  }

  addDepart(di:Depart) { 
    this.departList.push(di);
  }
  
  getDepartList():Array<Depart>{
    return this.departList;
  }
  
}
