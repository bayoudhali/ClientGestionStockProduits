import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input()
showSiderBar: boolean;

@Output()

showSiderBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
affchierSideBar(){

  this.showSiderBar=!this.showSiderBar;
  this.showSiderBarChange.emit(this.showSiderBar);
}
}
