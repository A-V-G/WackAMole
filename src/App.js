import React from 'react';
import dirt from './dirt.svg';
import mole from './mole.svg';
import './App.css';
import SelectQuantityHole from './component/controls/SelectQuantityHole';
import SetDelayMole from './component/controls/SetDelayMole';
import StartStopBtn from './component/controls/StartStopBtn';


class App extends React.Component {
  state = {counter: 0, indexCoordsMole: null, selectHole: 6, delayMol: 3, gameStarted: false}
  pointInterval;
  pointTimeout;


  setNewActiveClass = () => {
    const randomPositionOfMole = Math.floor(Math.random() * ((this.state.selectHole - 1) - 0 + 1)) + 0;

    this.setState({indexCoordsMole: randomPositionOfMole})
  }

  onStart = () => {
    clearInterval(this.pointInterval)
    this.pointInterval = setInterval(this.delayTimeout, this.state.delayMol * 1000);
    this.setState({counter: 0, gameStarted: true})
  }

  onStop = () => {
    clearInterval(this.pointInterval)
    clearTimeout(this.pointTimeout)
    this.setState({indexCoordsMole: null, gameStarted: false})
  }

  randomTime = () => {
    console.log('create random time');
    const {delayMol} = this.state;
    return Math.floor(Math.random() * ((delayMol * 1000) - 0 + 1)) + 0;
  }

  delayTimeout = () => {
    clearTimeout(this.pointTimeout)
    this.pointTimeout = setTimeout(() => {
      this.setNewActiveClass();
    }, this.randomTime());
  }

  onGetMole = (event) => {
    if(event.currentTarget.classList.contains('active')) {
      this.setState({counter: ++this.state.counter, indexCoordsMole: null})
    }
  }

  onChangeQuantityHole = (event) => {
    this.setState({selectHole: event.target.value})
  }

  onChangeDelayMol = (event) => {
    console.log('change delay mol')
    this.setState({delayMol: event.target.value})
  }


  renderList = () => {
    let holeQuantity = []

    for(let i = 0; i < this.state.selectHole; i++) {
      const match = i === this.state.indexCoordsMole

      holeQuantity.push(<p id={i} className={match && 'active'} onClick={this.onGetMole}>
        <img src={dirt} className="dirt" alt="image" />
        <img src={mole} className="mole" alt="image" />
      </p>)
    }

    return holeQuantity
  }

    render() {
      const {gameStarted, delayMol} = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <div className="control-panel">
                <SelectQuantityHole disabled={gameStarted} handler={this.onChangeQuantityHole}/>
                <SetDelayMole disabled={gameStarted} handler={this.onChangeDelayMol} delay={delayMol}/>
                <StartStopBtn disabled={gameStarted} handler={this.onStart} mode="start"/>
                <StartStopBtn disabled={gameStarted} handler={this.onStop}/>
            </div>

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
