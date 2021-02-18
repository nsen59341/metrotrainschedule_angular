import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { 
  }
  getStatus(date,numb){
    return this.http.get("http://127.0.0.1:8000/get-live-satus/"+date+'/'+numb);
  }
  getSeatAvailability(info){
    console.log(info);
    return this.http.post("http://127.0.0.1:8000/seat-availability/",info);
  }
  getTrainFare(info){
    return this.http.post("http://127.0.0.1:8000/seat-train-fare/",info);
  }
  getSchedule(tno){
    return this.http.get("http://127.0.0.1:8000/train-schedule/"+tno);
  }
  get_trains(stn_code){
    return this.http.get("http://127.0.0.1:8000/available-trains/"+stn_code);
  }
}
