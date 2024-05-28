import React from "react"
import traveldata from "./traveldata"
import './index.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"


export default function App() {
  const cards = traveldata.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
  })        
  
  return (
    <div>
        
        <Navbar />
        <section className="cards-list">
            {cards}
        </section>
    </div>
  )
} 

