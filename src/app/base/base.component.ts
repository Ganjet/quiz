import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }
string;
str;
test = 'What is you name?'
  ngOnInit() {
    this.string = btoa(this.test);
   

    this.str = atob(this.string);

  }

}
