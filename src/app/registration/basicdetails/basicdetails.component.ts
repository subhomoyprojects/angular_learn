import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css']
})


export class BasicdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// For TimePicker
  time = {hour: 13, minute: 30};
  time1 = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
// For TimePicker
}
