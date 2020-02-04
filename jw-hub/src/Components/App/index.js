import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: ['Daredevil', 'Psych', 'The Punisher']
    }
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings').then(
      (res) => { console.log(res) }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Ayyee Mr. Clank" />
        The lengs of the series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
