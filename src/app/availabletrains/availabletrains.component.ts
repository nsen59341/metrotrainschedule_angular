import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-availabletrains',
  templateUrl: './availabletrains.component.html',
  styleUrls: ['./availabletrains.component.css']
})
export class AvailabletrainsComponent implements OnInit {

  t_find;
  stations:any;
  ip_stn_code;
  trains;
  t_station;
  page = 1;
  pageSize = 10;
  collectionSize;
  t_trains;
  is_invalid = false;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.stations = GlobalConstants.stations;
    console.log(this.stations);
  }

  getTrains(info) {
    console.log(info.invalid);
    if(info.invalid==true)
    {
      this.is_invalid = true;
    }
    else{
      this.is_invalid = false;
      this.ip_stn_code = info.value.st_code;
      this.trainService.get_trains(this.ip_stn_code).subscribe(res=> {
        console.log(res);
        if(res['ResponseCode'] == 200)
        {
          this.t_find = 1;
          this.t_station = this.ip_stn_code;
          this.trains = res['Trains'];
          this.t_trains = this.trains.map((train, i) => ({id: i + 1, ...train}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
          this.collectionSize = this.trains.length;
          if(this.collectionSize==0)
          {
            this.t_find = 0;
          }
          console.log(this.collectionSize);
        }
        else{
          this.t_find = 0;
        }
      });
    }
  }

  refreshRoutes() {
    this.t_trains = this.trains
      .map((train, i) => ({id: i + 1, ...train}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


}
