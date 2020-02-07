import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../Containers/Series';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then(res => res.json())
    .then(series => this.setState({ series }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Ayyee Mr. Clank" />
        The lengs of the series array - {this.state.series.length}
        <Series />
      </div>
    );
  }
}