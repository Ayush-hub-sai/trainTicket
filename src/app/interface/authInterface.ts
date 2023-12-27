export class Register {
    passengerID: number
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    constructor() {
        this.passengerID = 0
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.password = ''
    }
}

export class login {
    phone: string
    password: string

    constructor() {
        this.phone = ''
        this.password = ''
    }
}

// export interface loginResponse {
//     message: string
//     result: boolean
//     data: Data
// }

// export interface Data {
//     passengerID: number
//     firstName: string
//     lastName: string
//     email: string
//     phone: string
//     password: string
// }


