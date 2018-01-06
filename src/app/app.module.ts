import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {enableProdMode} from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { DepartComponent } from './depart/depart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartInsertComponent } from './depart-insert/depart-insert.component';
import { FuncTestComponent } from './func-test/func-test.component';
import { PromiseComponent } from './promise/promise.component';
import { DepartUpdateComponent } from './depart-update/depart-update.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { UserDepartComponent } from './user-depart/user-depart.component';
import { UserViewComponent } from './user-view/user-view.component'; // ng generate component User 로 자동으로  추가된 부분
import { CommonServiceService } from './common/common-service.service';


@NgModule({

  //사용할 컴포넌트 등록
  declarations:[
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartInsertComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent,
    ParentComponent,
    LifecycleTestComponent,
    UserDepartComponent,
    UserViewComponent ,
    AppComponent,
    UserComponent
  ],
  // 
  imports: [
    BrowserModule , 
    FormsModule , 
    HttpModule , 
    ReactiveFormsModule , 
    RouterModule.forRoot ([
      {
        path: 'userdepart', 
        component :UserDepartComponent
      } ,
      {
        path: 'test', 
        component :TestComponent
      }
      ,
      {
        path: 'depart', 
        component :DepartComponent
      }
      ,
      {
        path: 'functest', 
        component : FuncTestComponent
      }
      ,
      {
        path: '', 
        component :WelcomeComponent
      } ,
      {
        path: 'promise', 
        component :PromiseComponent
      },
      {
        path: 'parent', 
        component :ParentComponent
      }
    ]) 
  ],
  // ts에서 굳이 provider로 등록하지 않아도 사용가능하다
  providers: [CommonServiceService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
