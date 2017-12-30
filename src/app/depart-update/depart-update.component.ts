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
  
  departInfo:Depart;

  constructor(private dus:DepartUpdateService) {
    this.departInfo = new Depart();
  
    
   }

  save():void {

  }
  ngOnInit() {
    //
    console.log("diNo : " +   this.diNo) ;

    this.dus.getDepart(this.diNo ).subscribe( res => {
       this.departInfo= res.json()[0];

    })
  }

  close():void {
    this.childVisible.emit(false);
  }

}
