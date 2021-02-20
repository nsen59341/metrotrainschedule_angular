import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-livestatus',
  templateUrl: './livestatus.component.html',
  styleUrls: ['./livestatus.component.css']
})
export class LivestatusComponent implements OnInit {

  t_find;
  status;
  t_no;
  t_start_date;
  t_routes;
  page = 1;
  pageSize = 6;
  collectionSize;
  troutes;
  is_invalid_date = false;
  is_invalid_train = false;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
  }

  getStatus(f)
  {
    console.log(f);
    if( f.invalid==true )
    {
      if( f.controls.date.status == 'INVALID' )
        this.is_invalid_date = true;
      if( f.controls.numb.status == 'INVALID' )
        this.is_invalid_train = true;
    }
    else{
      this.is_invalid_date = false;
      this.is_invalid_train = false;
      this.trainService.getStatus(f.value.date, f.value.numb).subscribe(res=>{
        console.log(res);
        if( res['ResponseCode'] == 200 )
        {
          this.t_find=1;
          this.t_no = res['TrainNumber'];
          this.t_start_date = res['StartDate'];
          this.troutes = res['TrainRoute'];
          this.t_routes = this.troutes.map((route, i) => ({id: i + 1, ...route}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
          this.collectionSize = this.troutes.length;
          console.log("collection size: "+this.collectionSize);
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
