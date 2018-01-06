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

  viewVisible:boolean =false ;
  viewDi:Depart ;
  viewDiNo:number;

  departList:Array<Depart> = [] ; 



  diNo:string = '' ;

  //depart insert 에 보낼 값
  parentVisible :boolean = false ;
  subTitle : string = this.title +"입력" ;

  constructor(private dis:DepartService) { 
    this.departInfo = new Depart();


  }

  ngOnInit() {


  }

  toggleDepartInsert (visible:boolean) : void {
    this.parentVisible = visible;
  }

  toggleDepartUpdate(visible:boolean) :void {

    this.viewVisible = visible;

  }

  saveDepartInfo (di:Depart) :void { 
    console.log("di : " + JSON.stringify(di) );

    this.departInfo = di ;

    this.addDepart(di);

    //this.dis.addDepart(di);
   
  }

  //---------------------------------------------------------------------------------------------------------------------//


  // 2017.12.23
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

  openView(diNo:number) :void {
    console.log("openView diNo :"+ diNo);
    this.viewVisible  = true ;

    
    this.viewDiNo = diNo;

  }

  addDepart(di:Depart):void { 
 
    this.dis.addDepartPost(di).subscribe (

      datas => {
        let result = datas.json();
      //  this.departInfo = result.di ; 
        console.log( result );

        if(result.succeed=="ok") {
          alert("부서 추가가 정상적으로 성공하였습니다.") ;
          this.showDepartList();
        } else { 
          alert("부서 추가가 실패하였습니다.") ;
        }
      }

    ); 
    // this.dis.addDepart(this.departInfo);
    // this.departInfo = new Depart();
  }
  showDepartList():void { 
   this.dis.getDepartList(this.diNo).subscribe(
     datas => {
       console.log(datas.json());
       this.departList = datas.json().list;
     }
   ) ;
  }



  deleteCurRow(di:Depart):void { 
 
    let dino:number = di.dino ;
    this.dis.deleteDeaprt(dino).subscribe(
      datas=> {
        let result = datas.json();
          console.log( result );
  
          if(result.error ) { 
            alert(result.error.msg) ;
          } else {
            alert("부서 삭제가 정상적으로 성공하였습니다.") ;
            this.showDepartList();
          }
        }
      
    );



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
   getDepartById(dino:number):number { 

     console.log("dino :" + dino );
     return 1;
  }


  childUpdateComplete(result:string ) :void {

    if(result == "ok") {
      alert("부서 수정에 정상적으로 성공하였습니다.") ;
      
    } else { 
      alert("부서 수정에 실패하였습니다.") ;
    }

    console.log("result: " + result ) ;
    this.showDepartList();

  }
}

