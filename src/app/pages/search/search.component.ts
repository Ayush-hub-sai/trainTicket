import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStation, ResponseModel } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fromStationId: any
  toStationId: any
  searchDate: any
  trainList: any[] = []
  stationList: IStation[] = []

  constructor(private activateUrl: ActivatedRoute, private _railwayService: RailwayService) {
    this.activateUrl?.params?.subscribe((res: any) => {
      this.fromStationId = res?.fromStation
      this.toStationId = res?.toStation
      this.searchDate = res?.date
    })
  }

  ngOnInit(): void {
    this.getAllStations()
    this.getTrainsBetweenStation()
  }

  getAllStations() {
    this._railwayService.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data
    })
  }

  getTrainsBetweenStation() {
    this._railwayService.getAllTrainBetweenStations(this.fromStationId, this.toStationId, this.searchDate).subscribe((res: any) => {
      this.trainList = res.data
    })
  }

  search() {
    this.getTrainsBetweenStation()
  }

  getFromStation() {
    let arrivalStationName: any = ''
    return arrivalStationName = this.trainList.find((train: any) => train.arrivalStationName)
  }

  getToStation() {

  }
}
