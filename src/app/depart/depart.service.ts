import { Injectable } from '@angular/core';
import { Depart } from './depart';


@Injectable()
export class DepartService {

  departList:Array<Depart> = [] ; 
  
  constructor() { 
    console.log("누군가는 부서생성자를 호출합니다.");
  }

  addDepart(di:Depart) { 
    this.departList.push(di);
  }
  
  getDepartList():Array<Depart>{
    return this.departList;
  }
  
}
