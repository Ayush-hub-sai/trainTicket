import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStation, ResponseModel } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stationList: IStation[] = []
  fromStationId: string | null = 'From Station'; // Set the default placeholder
  toStationId: string | null = 'To Station';
  traveldate: any
  constructor(private _railwayservice: RailwayService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStations()
  }

  getAllStations() {
    this._railwayservice.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data
    })
  }

  search() {
    this.router.navigate(['search', this.fromStationId, this.toStationId, this.traveldate])
    console.log(this.traveldate);
    console.log(this.fromStationId);
    console.log(this.toStationId);
  }
}
