import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild("name") name:ElementRef |undefined
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    localStorage.setItem("name",this.name?.nativeElement.value)
  }
}
