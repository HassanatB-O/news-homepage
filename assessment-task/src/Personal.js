import React from "react";
import {Link} from "react-router-dom"

export default function Personal(){
    
    return (
        <div className="personal-info">
            <div className="Header">
            <h1>Complete your purchase</h1>
            <div className="details-sctn">
                <div className="orange-text">
                    <p>Personal Info</p>
                    <div className="orange-line"></div>
                </div>
                <p>Billing Info</p>
                <p>Confirm Payment</p>
            </div>
            <hr/>
        </div>
            <form>
                <label className="label">Name</label>
                <br/>
                <input type={"text"} placeholder="Opera Linus Ahmed"/>
                <br/>
                <label className="required">Email Address</label>
                <p className="receipt-info">The purchase receipt would be sent to this address</p>
                <input type={"email"} placeholder="Operalinusahmed@devmail.com"/>
                <br/>
                <label className="label">Address 1</label>
                <br/>
                <input type={"text"} placeholder="The address of the user goes here"/>
                <br/>
                <label className="label">Address 2</label>
                <br/>
                <input type={"text"} placeholder="and here"/>
                <br/>
                <div className="location">
                    <div>
                        <label className="label">Local Government</label>
                        <input type={"text"} placeholder="Surulere"/>
                    </div>
                    <div>
                        <label className="label">State</label>
                        <input type={"text"} placeholder="Lagos" className="state-input"/>
                    </div>
                </div>
                <Link to="/billing"><button className="next-btn">Next</button></Link>
                <span className="cancel-pymt">Cancel Payment</span>
            </form>
        </div>
    )
}