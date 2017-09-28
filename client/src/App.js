import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      music: []
    }
  }

  // get music after first react mount
  componentDidMount(){
    this.getMusic();
  }

  getMusic = () => {
    fetch('/api/music')
      .then(res => res.json())
      .then(music => this.setState({music}));
  }
  render() {
   
    return (
      <div className="App">
      {this.state.music}
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
