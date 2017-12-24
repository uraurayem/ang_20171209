import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Depart} from '../depart/depart' ;

@Component({
  selector: 'app-depart-insert',
  templateUrl: './depart-insert.component.html',
  styleUrls: ['./depart-insert.component.css']
})
export class DepartInsertComponent implements OnInit {

  @Input() title:string; 
  @Output() childVisible = new EventEmitter<boolean>();
  @Output() childDepartInfo = new EventEmitter<Depart>();

  departInfo:Depart;  

  constructor() { 
    this.departInfo = new Depart();
      }
  ngOnInit() {

  }
  save():void { 
    this.childDepartInfo.emit(this.departInfo);
    this.close();
  }
  close():void { 
    this.childVisible.emit(false);
  }
}
