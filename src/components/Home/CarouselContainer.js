import React, { Component } from 'react'

import Slide from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slide.css'
import laptop from '../../Assets/slides/laptop.jpg'
import desktop from '../../Assets/slides/desktop.jpg'
import istudent from '../../Assets/slides/istudent.jpg'

 class CarouselContainer extends Component {

   
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover:true,
            focusOnSelect: true,
            fade: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    fade: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                  }
                }
              ]
          };

        return (
            <div className="slide-show">
            <Slide {...settings}>                
                    <div>
                        <img className="slide-img" src={desktop} alt="slide"/>
                    </div>
                    <div>
                        <img className="slide-img" src={laptop} alt="slide"/>
                    </div>
                    <div>
                        <img className="slide-img" src={istudent} alt="slide"/>
                    </div>            
                </Slide>
            </div>
        )
    }
}

export default CarouselContainer