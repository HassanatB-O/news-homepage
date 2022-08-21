import React from "react";
import {Link} from "react-router-dom"

export default function Billing(){
    return(
        <div>
            <div className="Header">
            <h1>Complete your purchase</h1>
            <div className="details-sctn">
                <p>Personal Info</p>
                <div className="orange-text">
                    <p>Billing Info</p>
                    <div className="orange-line-one"></div>
                </div>
                <p>Confirm Payment</p>
            </div>
            <hr/>
        </div>
            <label className="required">Name on Card</label>
            <input type={"text"} placeholder="Opera Linus Ahmed"/>
            <br/>
            <label className="required">Card Type</label>
            <input type={"text"} placeholder="Visa"/>
            <div className="card-details">
                <div>
                    <label className="required">Card details</label>
                    <input type={"text"} placeholder="44960 44960 44960 44960"/>
                </div>
                <div className="expiry-ish">
                    <div>
                        <label className="required">Expiry Date</label>
                        <input type={"text"} placeholder="04/23"/>
                    </div>
                    <div>
                        <label className="required label">CVV</label>
                        <input type={"text"} placeholder="923"/>
                    </div>
                </div>
            </div>
            <Link to="/payment"><button className="next-btn">Next</button></Link> 
            <span className="cancel-pymt">Cancel Payment</span>
        </div>
    )
}