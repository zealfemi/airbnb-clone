import React from 'react'
import Card from './Card'
import data from '../data'

export default function Cards() {
    const cards = data.map(item => {
        return(
        <Card
            key = {item.id} 
            //item = {item}
            {...item}
        />
        )
    })
/*          title = {item.title}
            description = {item.description}
            price = {item.price}
            img = {item.coverImg}
            rating ={item.stats.rating} 
            ratingCount={item.stats.reviewCount}
            location = {item.location}
            openSpots = {item.openSpots}
*/
    return(
        <div className="cards">
            {cards}
        </div>
    )
}

/*
<Card 
                img="pic1"
                available="SOLD OUT" 
                rating={"5.0"} 
                ratingCount={6}
                country="USA"
                info="Life lessons with Katie Zaferes"
                price={136}
            />

            <Card 
                img="pic2"
                available="ONLINE" 
                rating="5.0" 
                ratingCount="30"
                country="USA"
                info="Learn wedding photography"
                price="125"
            />

            <Card 
                img="pic3"
                available="SOLD OUT" 
                rating="4.8" 
                ratingCount="2"
                country="USA"
                info="Group Mountain Biking"
                price="50"
            />
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
