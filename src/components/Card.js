import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
            <div className="photo">
                <img src= {props.item.imageUrl} className="card--image" />
            </div>

            <div className="info">

                <div className = "location">
                    <img src = "./images/location.svg" className="photo--location"/>
                    <p className = "country">{props.item.location}</p>
                    <a href= {props.item.googleMapsUrl} className="maps">View on Google Maps</a>
                </div>
            
                <h1 className="place">{props.item.title}</h1>

                <div className = "date">
                    <p>{props.item.startDate} </p>
                    <p> - </p>
                    <p>{props.item.endDate}</p>
                </div>

                <p className="description">{props.item.description}</p>

            </div>
            
        </div>
    )
}