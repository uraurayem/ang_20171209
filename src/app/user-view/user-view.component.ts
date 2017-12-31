import { Component, OnInit ,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {


  @Input() mode:string ; 
  @Output() viewClose  = new EventEmitter<string>() ;

  constructor() { }

  ngOnInit() {
  }

  save() : void { 
    //this.command.emit( "closeAndReload") ;
    //this.command.emit( "close") ;
  }
  close() : void { 


  
    this.viewClose.emit( "close") ;
  }
}
