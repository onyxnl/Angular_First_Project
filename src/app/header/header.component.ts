import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items :any;
  constructor() { 
     this.items = [
     	{
	     	title : "Home",
	     	link : "#home"
	     },
	     {
	     	title : "About",
	     	link :"#about"
	     },
	     {
	     	title : "Contact Us",
	     	link :"#contact"
	     }
     ]

  }
 // component lifecycle
  ngOnInit() {
  	console.log("On Init");
  }

  ngOnDestory(){
  	console.log("destory");
  }

  ngOnChanges(changes){
  	console.log("changes");
  }

  ngAfterContentInit(){
  	console.log("Content");
  }
  ngAfterContentCheck(){
  	console.log("Check Content");
  }
  ngAfterViewInit(){
    // after loading all html pages
  	console.log("View Render");
  }

  ngAfterViewCheck(){
    // after loading all html pages
  	console.log("After Check");
  }


}
