import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {enableProdMode} from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; // ng generate component User 로 자동으로  추가된 부분


@NgModule({

  //사용할 컴포넌트 등록
  declarations: [
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
      }

    ]) 
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
