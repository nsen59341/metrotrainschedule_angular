import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-seatavailability',
  templateUrl: './seatavailability.component.html',
  styleUrls: ['./seatavailability.component.css']
})
export class SeatavailabilityComponent implements OnInit {

  classes:any;
  stations:any;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.classes = [
     { name: 'Anubhuti Class (EA)', val: 'EA' },
     { name: 'AC First Class (1A)', val: '1A' },
     { name: 'Exec. Chair Car (EC)', val: 'EC' },
     { name: 'AC 2 Tier (2A)', val: '2A' },
     { name: 'First Class (FC)', val: 'FC' },
     { name: 'AC 3 Tier (3A)', val: '3A' },
     { name: 'AC 3 Economy (3E)', val: '3E' },
     { name: 'EAC Chair car (CC)', val: 'CC' },
     { name: 'Sleeper (SL)', val: 'SL' },
     { name: 'Second Sitting (2S)', val: '2S' },
    ];
    this.stations = [
      { name: 'NEW DELHI - NDLS', val: 'NDLS' },
      { name: 'HOWRAH JN - HWS', val: 'HWS' },
      { name: 'SECUNDERABAD JN - SC', val: 'SC' },
      { name: 'MUMBAI CENTRAL - MMCT', val: 'MMCT' },
      { name: 'BHOPAL  JN - BPL', val: 'BPL' },
      { name: 'KSR BENGALURU - SBC', val: 'SBC' },
      { name: 'GUWAHATI - GHY', val: 'GHY' }
     ];
  }

  getSeatAvailability(f) {
    console.log(f.value);
    var availObj = {
      'date': f.value.date,
      'tno': f.value.numb,
      'from': f.value.form,
      'to': f.value.to,
      'class': f.value.class
    };
    this.trainService.getSeatAvailability(availObj).subscribe(res=> {
      console.log(res);
    });
  }

}
