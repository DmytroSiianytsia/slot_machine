import React, { Component } from 'react';
import './app.css';
import { Drum } from './components/drum/Drum';

class App extends Component {
  state = {
    active: 'no'
  }

  spin = () => {
    this.setState(state => ({
      active: (state.active === 'no' || state.active === 'active1') ? 'active' : 'active1'
    }));
  }

  render() {
    return (
      <div className='main-container'>
        <div className='app-container'>
          <div className='app'>
            <Drum className={`drum0 ${this.state.active}`} />
            <Drum className={`drum1 ${this.state.active}`} />
            <Drum className={`drum2 ${this.state.active}`} />
            <Drum className={`drum3 ${this.state.active}`} />
            <Drum className={`drum4 ${this.state.active}`} />
          </div>
          <button className='btn' onClick={this.spin}>Spin</button>
        </div>
      </div>
    );
  }
}

export default App;
