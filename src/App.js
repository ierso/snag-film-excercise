import React, { Component } from 'react';
import Slider from './components/slider/Slider';
import Title from './components/title/Title';

import { loadFilms } from './lib/mrssService';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      films: [],
      title: 'MRSS feed'
    }
  }

  componentDidMount() {
    loadFilms().then(data=>this.setState({
      films: data
    }));
  }

  render() {
    return (
      <div className="c-app">
        <div className="o-container">
          <Title title={this.state.title}/>
          <Slider films={this.state.films}/>
        </div>
      </div>
    );
  }
}

export default App;
