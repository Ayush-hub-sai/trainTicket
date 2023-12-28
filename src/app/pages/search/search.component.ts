import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IStation, ResponseModel } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { BookingComponent } from '../booking/booking.component';

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

  constructor(private modalService: NgbModal, private activateUrl: ActivatedRoute, private _railwayService: RailwayService) {
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
    return this.trainList[0]?.departureStationName
  }

  getToStation() {
    return this.trainList[0]?.arrivalStationName
  }

  bookNow(train: any) {
    const modalRef = this.modalService.open(BookingComponent, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.trainData = train
  }

}
