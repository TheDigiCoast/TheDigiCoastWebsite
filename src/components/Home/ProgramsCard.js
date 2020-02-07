import React from 'react'
import './Home.css'

 function ProgramsCard({imageUrl}) {
    return (
        <div className="card">
            <img className="card-img prog-img" src={imageUrl} alt="program"/>
        </div>
    )
}

export default ProgramsCard;