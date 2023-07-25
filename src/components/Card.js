import React from 'react'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt={props.coverImg} className="card-pic"/>
            <div className="card-details">
                <img src="../images/star.png" alt="star" />
                <span>{props.stats.rating}</span><span className="gray"> ({props.stats.reviewCount}) ∙ {props.location}</span>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

/*<div className="card-text">{props.available}</div>*/

/*
export default function Card({available, rating, ratingCount, country, info, price}) {
    return(
        <div className="card">
            <div className="card-pic" >
                <div className="card-text">{available}</div>
            </div>
            <div className="card-details">
                <img src={star} alt="star" />
                <span>{rating}</span><span className="gray"> ({ratingCount}) ∙ {country}</span>
                <p>{info}</p>
                <p><span className="bold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}
*/

/*

        <div className="card">
            <div className="card-pic">
                <div className="card-text">SOLD OUT</div>
            </div>
            <div className="card-details">
                <img src={star} alt="star" />
                <span>5.0</span><span className="gray"> (6) ∙ USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
*/