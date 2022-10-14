// class for the socials object the API data

export class socials {
    facebook: string
    instagram: string
    twitter: string

    constructor(_socials: any){
        this.facebook = _socials.address
        this.instagram = _socials.firstName
        this.twitter = _socials.address
    }
}