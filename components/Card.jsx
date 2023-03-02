import React from "react";

export default function(props) {
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="cardExp">
           {badgeText && <div className="badge">{badgeText}</div>}
            <img src={props.img} alt="" />
            <div className="cardExp--desc">
                <img src="/star.png" alt="" />
                <span>{props.rating}</span>
                <span className="cGray">({props.reviewCount})•</span>
                <span className="cGray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span>/ person</p>
        </div>
    )
}