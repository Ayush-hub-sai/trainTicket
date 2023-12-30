import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IStation, ResponseModel } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stationList: IStation[] = []
  fromStation: any | null = 'From Station'; // Set the default placeholder
  toStation: any | null = 'To Station';
  traveldate: any

  constructor(
    private _railwayservice: RailwayService,
    private router: Router,
    public _translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this._railwayservice.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })
  }

  ngOnInit(): void {
    this.getAllStations()
  }

  getAllStations() {
    this._railwayservice.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data
    })
  }

  search() {
    let trainObj: any = {
      fromStation: this.fromStation.stationName,
      toStation: this.toStation.stationName,
      date: this.traveldate
    }

    localStorage.setItem("trainObj", JSON.stringify(trainObj))
    this.router.navigate(['search', this.fromStation.stationID, this.toStation.stationID, this.traveldate])
  }

  
}
