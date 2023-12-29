import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { BookTicket, TrainAppBookingPassenger } from 'src/app/interface/railywayInterface';
import { RailwayService } from 'src/app/services/railway/railway.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  trainData: any
  ticketBook: BookTicket = new BookTicket
  bookPassenger: TrainAppBookingPassenger = new TrainAppBookingPassenger
  passengerList: any[] = []
  loginObj: any

  ngOnInit(): void {
    const login = localStorage.getItem("loginUser")
    if (login != null) {
      this.loginObj = JSON.parse(login)
    }
  }

  constructor(public activeModal: NgbActiveModal,
    private _railwayService: RailwayService,
    public _translateService: TranslateService,) {
    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })
  }

  AddPassenger() {
    const passenger = { ... this.bookPassenger }
    this.passengerList.push(passenger)
  }

  BookTicket() {
    let ticket = this.ticketBook
    ticket.passengerId = this.loginObj.passengerID
    ticket.totalSeats = this.passengerList.length
    ticket.trainId = this.trainData.trainId
    ticket.TrainAppBookingPassengers = this.passengerList
    ticket.travelDate = this.trainData.departureDate
    this._railwayService.bookTicket(ticket).subscribe((res: any) => {
      this.activeModal.dismiss()
    })
  }

  remove(index: any) {
    this.passengerList.splice(index, 1)
  }
}
