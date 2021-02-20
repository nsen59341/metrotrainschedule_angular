import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-trainschedule',
  templateUrl: './trainschedule.component.html',
  styleUrls: ['./trainschedule.component.css']
})
export class TrainscheduleComponent implements OnInit {

  t_find;
  t_no;
  t_routes;
  page = 1;
  pageSize = 6;
  collectionSize;
  troutes;
  is_invalid = false;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
  }

  getSchedule(info){
    if(info.invalid==true)
    {
      this.is_invalid = true;
    }
    else{
      this.is_invalid = false;
      this.trainService.getSchedule(info.value.numb).subscribe(res=> {
        console.log(res);
        if( res['ResponseCode'] == 200 )
        {
          this.t_find=1;
          this.t_no = info.value.numb;
          
          this.troutes = res['Route'];
          this.t_routes = this.troutes.map((route, i) => ({id: i + 1, ...route}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);;
          this.collectionSize = this.troutes.length;
          console.log(this.troutes);
        }
        else{
          this.t_find = 0;
        }
      });
    }
  }

  refreshRoutes() {
    this.t_routes = this.troutes
      .map((route, i) => ({id: i + 1, ...route}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
