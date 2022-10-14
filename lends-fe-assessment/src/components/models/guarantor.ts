// class for the gurantor object the API data

export class guarantor {
    address: string
    firstName: string
    gender: string
    lastName: string
    phoneNumber: number

    constructor(_guarantor: any){
        this.address = _guarantor.address
        this.firstName = _guarantor.firstName
        this.gender = _guarantor.gender
        this.lastName = _guarantor.lastName
        this.phoneNumber = _guarantor.phoneNumber
    }
}