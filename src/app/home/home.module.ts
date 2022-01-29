import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],exports:[HeaderComponent]
})
export class HomeModule { }
