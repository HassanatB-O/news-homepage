import React from "react";

export default function Header(){
    return(
        <div className="Header">
            <h1>Complete your purchase</h1>
            <div className="details-sctn">
                <p>Personal Info</p>
                <p>Billing Info</p>
                <p>Confirm Payment</p>
            </div>
            <hr/>
        </div>
    )
}