import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IStation, ResponseModel } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { BookingComponent } from '../booking/booking.component';
import { Title, Meta } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
  title = 'search train';

  constructor(private modalService: NgbModal,
    private activateUrl: ActivatedRoute,
    private _railwayService: RailwayService,
    public _translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private titleData: Title, private meta: Meta) {

    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })

  }
  trainObj: any;
  ngOnInit(): void {
    let temp: any = localStorage.getItem("trainObj")
    this.trainObj = JSON.parse(temp)
    this.fromStationId = this.trainObj.fromStation.stationID
    this.toStationId = this.trainObj.toStation.stationID
    this.searchDate = this.trainObj.date
    this.getAllStations()
    this.getTrainsBetweenStation()
    this.titleData.setTitle(this.title)
    this.meta.updateTag({ name: 'keywords', content: 'searching train, location based train' });
  }

  getAllStations() {
    this._railwayService.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data
    })
  }

  getTrainsBetweenStation() {
    this._railwayService.getAllTrainBetweenStations(this.fromStationId, this.toStationId, this.searchDate).subscribe((res: any) => {

      if (res.data.length == 0) {
        this.toastr.warning("There is no train found between 2 stations.")
      }
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
