import React from "react";
import {Link} from "react-router-dom"


export default function CompletePurchase(){
    return(
        <div>
            <div className="Header">
                <h1>Complete your purchase</h1>
                <div className="details-sctn">
                    <p>Personal Info</p>
                    <p>Billing Info</p>
                    <div className="orange-text">
                        <p>Confirm Payment</p>
                        <div className="orange-line-two"></div>
                    </div>
                </div>
                <hr/>
            </div>
                <div className="blue-section">
                    <p>Item Name</p>
                    <p>#  Price</p>
                </div>
            <div className="purchase-container">
                <div className="table-row">
                    <p>Data Science and Usability</p>
                    <p className="amount">50,000.00</p>
                </div>                 
                <div className="table-row">
                    <p>Shipping</p>
                    <p className="zero-amount">0.00</p>
                </div>
                    <hr/>
                <div className="total-box">
                    <p>Total</p>
                    <p className="amount">50,000.00</p>
                </div>
            </div>
            <Link to="/completed"><button className="next-btn">Pay</button></Link>
            <span className="cancel-pymt">Cancel Payment</span>
        </div>
    )
}