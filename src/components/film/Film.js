import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Film extends Component {
    render(){
        var imageUrl = this.props.image.replace(/^http:\/\//i, 'https://'); 
        return (
            <div className="c-film">
                <div className="c-film__poster">
                    <img className="c-film__poster-image" 
                        src={imageUrl} 
                        alt={this.props.title} 
                    />
                </div>
                <div className="c-film__title">
                    <h3 className="c-film__title-copy">
                        {this.props.title}
                    </h3>
                </div>
            </div>
        )
    }
}

Film.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Film;