import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-test',
  templateUrl: './func-test.component.html',
  styleUrls: ['./func-test.component.css']
})
export class FuncTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  funcTest1():void { 
    test();
    function test():void { 
      alert(1);
    }
  }
  funcTest2():void { 
 
    let test;  
     try {
       test();
      } catch (e) {  
        alert(e);
        test = function ()
        {
        alert(1);
        }
     }
     test();
  }
}
