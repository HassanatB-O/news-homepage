// class for the profile object the API data

export class profile {
    address: string
    avatar: string
    bvn: number
    currency: string
    firstName: string
    gender: string
    lastName: string
    phoneNumber: number

    constructor(_profile: any){
        this.address = _profile.address
        this.avatar = _profile.avatar
        this.bvn = _profile.bvn
        this.currency = _profile.currency
        this.firstName = _profile.firstName
        this.gender = _profile.gender
        this.lastName = _profile.lastName
        this.phoneNumber = _profile.phoneNumber
    }
}