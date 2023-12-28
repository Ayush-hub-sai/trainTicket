export interface IStation {
    stationID: number
    stationName: string
    stationCode: string
}

export interface ResponseModel {
    message: string
    result: boolean
    data: any[]
}

export class BookTicket {
    bookingId: number = 0
    trainId: number = 0
    passengerId: number = 0
    travelDate: string = ''
    bookingDate: Date = new Date()
    totalSeats: number = 0
    TrainAppBookingPassengers: TrainAppBookingPassenger[] = []
}

export class TrainAppBookingPassenger {
    bookingPassengerId: number = 0
    bookingId: number = 0
    passengerName: string = ''
    seatNo: number = 0
    age: number = 0
}

