import React from 'react'
import './Home.css'

function AdsCard({imageUrl}) {
    return (
        <div className="card bg-dark text-white">
            <img src={imageUrl} alt="Ads" className="ads"/>
        </div>
    )
}

export default AdsCard;
