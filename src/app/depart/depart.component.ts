import { Component, OnInit } from '@angular/core';
import {Depart} from './depart';
import {DepartService} from './depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'] ,
  providers : [DepartService]
})
export class DepartComponent implements OnInit {

  title:string = "부서정보";
  departInfo: Depart ;
  btn1_title: string = "테스트보기" ; 
  isShow:boolean = false ;

  departList:Array<Depart> = [] ; 



  //depart insert 에 보낼 값
  parentVisible :boolean = false ;
  subTitle : string = this.title +"입력" ;

  constructor(private dis:DepartService) { 
    this.departInfo = new Depart();


  }

  ngOnInit() {


  }

  toggleDepartInsert (v:boolean) : void {
    this.parentVisible = v;
  }
  // onChildVisibleChanged(v:boolean) : void { 
  //   this.parentVisible = v; 
  // }

  printInfo():void {
    console.log(this.departInfo) ;
  }
  changeShow():void {
    if(this.isShow ) {
      this.isShow = false  ;
      this.btn1_title = "테스트 보기";
    } else { 
      this.isShow = true ;
      this.btn1_title = "테스트 안보기";
    }
  }
  addDepart():void { 
 
    this.dis.addDepart(this.departInfo);
    this.departInfo = new Depart();
  }
  showDepartList():void { 
    this.departList = this.dis.getDepartList();
  }

  deleteCurRow(dino:number):void { 
    let idx:number =-1; 

    idx = this.getFind(dino);
    this.departList.splice(idx , 1) ;
  }

  getFind(dino:number):number {
    let idx:number = -1;
    this.departList.forEach((di, index)=> {
      if(di.dino == dino ) {
        idx = index ;
      }
    } );

    return idx ;
  }
 }
