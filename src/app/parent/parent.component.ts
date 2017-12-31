import { Component, OnInit , DoCheck, AfterViewChecked , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , DoCheck , AfterViewInit , AfterViewChecked {

  visible : boolean ; 
  title: string ="컴포넌트 테스트";
  subTitle : string = "자식컴포넌트" ; 
  constructor() { 

    console.log("ParentComponent 초기시 실행")
  }

  ngOnInit() {
    console.log("ngOnInit : 부모 컴포넌트 초기시 실행");
    this.visible = false ;

  }

  ngDoCheck() {
    console.log("ngDoCheck :" + this.visible) ; 
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit 부모 한번 실행");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked 부모 값 변화시 매번 실행");
  }

  chVisible( v: boolean ) : void {
    console.log("chVisible : " + v) ;
    this.visible = v ;
  }
}
