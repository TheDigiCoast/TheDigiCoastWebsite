import React from 'react'
import './About.css'

function InfoCard({ownerInfo}) {
    return (
        <div>
            <div className="card mb-3 bg-dark text-white">
                <div className="row no-gutters">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <img className="card-img card-style-img" src={ownerInfo.image} alt="owners" />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="card-body">                            
                            <h5 className="card-title">{ownerInfo.name}</h5>
                            <p className="card-text">
                                <small>{ownerInfo.title}</small>
                            </p>
                            <p className="card-text">
                                E-mail : <small>{ownerInfo.email}</small>
                            </p>
                            <p className="card-text">
                                Phone : <small>{ownerInfo.phone}</small>
                            </p>
                            <p className="card-text">{ownerInfo.information}</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InfoCard;