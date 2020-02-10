import React from 'react'
import './Home.css'

export function NoviceCard() {
    return (
        <div className="card courseCard">
        <h4 className="couseCardHead">Novice (3 Weeks)<br/> GHs 500</h4>
        <div className="card-body text-center">
            Html5<br/>
            CSS3<br/>
            JavaScript<br/>
            PHP<br/>
            MySQL $ MSSQL (Basics)<br/>
            Ionic 4 (Introduction)<br/>
            Project Work<br/>
        </div>
        </div>
    )
}

export function IntermediateCard() {
    return (
        <div className="card courseCard">
        <h4 className="couseCardHead">Intermediate (1 Month)<br/> GHs 700 </h4>
        <div className="card-body text-center">
            Ionic<br/>
            Node.js<br/>
            React (Introduction)<br/>
            Angular (Introduction)<br/>
            MySQL $ MSSQL<br/>
            C# - Asp .Net Core<br/>
            Project Work (Database Driven Web App)<br/>
        </div>
        </div>
    )
}

export function AdvancedCard() {
    return (
        <div className="card courseCard">
        <h4 className="couseCardHead">Advanced (1.5 Months)<br/> GHs 700</h4>
        <div className="card-body text-center">
            Database Development $ Administration<br/>
            DevOps<br/>
            Test Driven Development<br/>
            C# - Asp .Net Core <br/>
            RESTFul APIs Development<br/>
            Project Work (Web $ Mobile Apps)<br/>
        </div>
        </div>
    )
}

function ProgramsCard() {
    return (
        <div className="card courseCard">        
            {/* <img className="card-img prog-img" src={imageUrl} alt="program"/> */}
        </div>
    )
}



export default ProgramsCard;