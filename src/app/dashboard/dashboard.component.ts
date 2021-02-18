import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  options:any;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      {
        name : 'Train Live status',
        url : '/get-live-satus'
      },
      {
        name : 'Train Schedule',
        url : '/get-train-schedule'
      },
      {
        name : 'Available Trains',
        url : '/get-available-trains'
      }
    ];
    console.log(this.options);
  }

}
