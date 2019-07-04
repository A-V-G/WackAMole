import React from 'react';
import dirt from './dirt.svg';
import mole from './mole.svg';
import './App.css';

class App extends React.Component {
  state = {counter: 0, positionOfMole: null}
  list = [1, 2, 3, 4, 5, 6];


  setNewActiveClass = () => {
    const randomPositionOfMole = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

    this.setState({positionOfMole: randomPositionOfMole})
  }

  componentDidMount() {
    setInterval(this.setNewActiveClass, 3000);
  };

  onGetMole = (event) => {
    if(event.currentTarget.classList.contains('active')) {
      this.setState({counter: ++this.state.counter, positionOfMole: null})
    }
  }


  renderList = () => {
    return this.list.map((item, idx) => {
      const d = idx === this.state.positionOfMole
      return <p id={idx} className={d && 'active'} onClick={this.onGetMole}>
        <img src={dirt} className="dirt" alt="image" />
        <img src={mole} className="mole" alt="image" />
      </p>
    })
  }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Whack-a-mole!<span className="score">{this.state.counter}</span></h1>
            <div className="hole-list">
              {this.renderList()}
            </div>
          </header>
        </div>
      );
    }
}

export default App;
