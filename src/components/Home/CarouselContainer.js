import React from 'react'

import compad1 from '../../Assets/compad1.jpg'
import compad2 from '../../Assets/compad2.jpg'

function CarouselContainer() {
    return (
        <div>
            <div id="carouselIndicators" className="carousel slide carousel-area" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li key="c1" data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li key="c2" data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li key="c3" data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src={compad1} className="w-100 h-5" alt="car-item1" />
                    </div>
                    <div className="carousel-item" >
                        <img src={compad2} className="d-block w-100 h-5" alt="car-item2" />
                    </div>
                    <div className="carousel-item" >
                        <img src="" className="d-block w-100 h-5" alt="car-item3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
    )
}

export default CarouselContainer;