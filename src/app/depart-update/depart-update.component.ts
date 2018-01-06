import { Component, OnInit , Input ,Output ,EventEmitter  } from '@angular/core';
import {Depart } from '../depart/depart';
import  {DepartUpdateService } from './depart-update.service';

@Component({
  selector: 'app-depart-update',
  templateUrl: './depart-update.component.html',
  styleUrls: ['./depart-update.component.css'] ,
  providers : [DepartUpdateService]
})
export class DepartUpdateComponent implements OnInit {

  @Input() diNo:number;  
  @Output() childVisible = new EventEmitter<boolean>();
  @Output() childUpdateComplete = new EventEmitter<string>();

  departInfo:Depart;

  constructor(private dus:DepartUpdateService) {
    this.departInfo = new Depart();
  
    
   }

  save():void {

    this.dus.updateDepartPost(this.departInfo).subscribe( datas => {

      let result = datas.json();

     
        // 결과
        this.childUpdateComplete.emit(result.succeed);
        this.close();
    } );
  }
  ngOnInit() {
    //
    console.log("diNo : " +   this.diNo) ;

    this.dus.getDepart(this.diNo ).subscribe( res => {
      console.log( " res.list: " +  res.json().list[0] ) ;
       this.departInfo=  res.json().list[0]  ;
    })
  }

  close():void {
    this.childVisible.emit(false);
  }

}
