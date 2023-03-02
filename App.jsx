import React from "react";
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data";

export default function() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img= {item.coverImg}
                rating= {item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })



    return (
        <div className="body--card">
             <Navbar />
             <Hero /> 
             <section className="card--group">
                {cards}
             </section>
           
        </div>
    )
}