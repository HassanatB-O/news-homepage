// class for the education object the API data

export class Education {
    duration: string
    employmentStatus: string
    level: string
    officeEmail: string
    sector: string
    monthlyIncome: number[]
    loanRepayment: number

    constructor(_education: any){
        this.duration = _education.duration
        this.employmentStatus = _education.employmentStatus
        this.level = _education.level
        this.loanRepayment = _education.loanRepayment
        this.officeEmail = _education.officeEmail
        this.sector = _education.sector
        this.monthlyIncome = _education.monthlyIncome
    }
}