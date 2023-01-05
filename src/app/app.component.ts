import { Component, OnInit } from "@angular/core";
  
@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}