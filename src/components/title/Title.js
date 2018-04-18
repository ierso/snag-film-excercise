import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Title extends Component {
    render() {
        return (
            <div className="c-title">
                <h1 className="c-title__copy">
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;