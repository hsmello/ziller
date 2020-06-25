import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ResponsiveCarousel.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="carousel_wrapper">
                <div className="Carousel">
                    <Slider {...settings}>
                        <div>
                            <img src={this.props.pic1} alt="" className="carouse_img" />
                        </div>
                        <div>
                            <img src={this.props.pic2} alt="" className="carouse_img" />
                        </div>
                    </Slider>
                    <div className="carousel_title">
                        {this.props.title}
                    </div>

                    <div className="card_text">

                        <div className="prices_cat">
                            Brazil:  R$ {this.props.BRLPrice}
                        </div>
                        <div className="prices_cat">
                            Europe:  {this.props.EURPrice}€
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}