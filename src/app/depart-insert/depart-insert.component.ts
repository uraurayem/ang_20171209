import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-depart-insert',
  templateUrl: './depart-insert.component.html',
  styleUrls: ['./depart-insert.component.css']
})
export class DepartInsertComponent implements OnInit {

  @Input() title:string; 
  @Output() childVisible = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {

  }


   close():void { 
     this.childVisible.emit(false);
   }
}
