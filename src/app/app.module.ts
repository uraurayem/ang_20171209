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
import { DepartUpdateComponent } from './depart-update/depart-update.component'; // ng generate component User 로 자동으로  추가된 부분


@NgModule({

  //사용할 컴포넌트 등록
  declarations:[
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    DepartInsertComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent ,
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
        path: 'user', 
        component :UserComponent
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
      }
    ]) 
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
