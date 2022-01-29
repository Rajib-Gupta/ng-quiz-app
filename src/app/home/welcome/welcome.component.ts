import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild("name") name:ElementRef |undefined
  message:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.name?.nativeElement.value){
       this.message=true
      return ;
    }else{
      this.router.navigate(['/question'])
    }
    localStorage.setItem("name",this.name?.nativeElement.value)
  }
}
