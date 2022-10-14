// class containing all the API data

import { profile } from "./profile";
import { guarantor } from "./guarantor";
import { Education } from "./Education";
import { socials } from "./socials";

export class User{
    id: any
    accountBalance: number;
    profile?: profile
    education?: Education;
    employmentStatus: string
    email: string
    guarantor?: guarantor
    orgName: string
    phoneNumber: number
    socials?: socials
    userName: string
    createdAt: string
    lastActiveDate: string
    handleChange?: any
    searchInput?: any

    constructor(_User: any){
        this.id = _User.id
        this.accountBalance = _User.accountBalance
        this.employmentStatus = _User.employmentStatus
        this.email = _User.email
        this.orgName = _User.orgName
        this.phoneNumber = _User.phoneNumber
        this.userName = _User.userName
        this.createdAt = _User.createdAt
        this.lastActiveDate = _User.lastActiveDate
    }
}

