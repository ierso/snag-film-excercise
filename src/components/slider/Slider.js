import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import Film from '../film/Film';
import { NextArrow, PrevArrow } from '../arrows/Arrows';

import './index.css';

class Slider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        return (
            <div className="c-slider">
                <Slick {...settings}>
                    {this.renderFilms()}
                </Slick>
            </div>
        )
    }
    renderFilms() {
        if(this.props.films) {
            return this.props.films.map((film, index) => {
                return (
                    <Film 
                        key={index}
                        title={film.title}
                        image={film.images.image[0].src}
                    />
                );	
            });
        }
    }
}

Slider.propTypes = {
    films: PropTypes.array.isRequired
}

export default Slider;