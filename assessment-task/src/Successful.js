import React from "react";
import Vector from "./Vector.png"
import {Link} from "react-router-dom"

export default function PurchaseCompleted(){
    return(
        <div className="last-modal">
            <div className="image-div">
                <img style={{width: 'auto', height: 'auto'}} src={Vector} alt="done-icon" className="done-icon"/>
            </div>
            <h1>Purchase Completed</h1>
            <p>Please check your email for details concerning this transaction</p>
            <Link to="/assessment-task"><h3>Return Home</h3></Link>
        </div>       
    )
}