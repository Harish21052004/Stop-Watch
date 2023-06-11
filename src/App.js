import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      isRunning: false
    };
  }

  startTimer = () => {
    this.setState({
      isRunning: true
    });
    this.timer = setInterval(() => {
      let { seconds, minutes, hours } = this.state;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      this.setState({
        seconds,
        minutes,
        hours
      });
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false
    });
  }

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      isRunning: false
    });
  }

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  render() {
    const { seconds, minutes, hours, isRunning } = this.state;
    return (
      <div className="Container">
        <div className='wrapper'>
          <h2>STOP WATCH</h2>
          <div className="Time">
            {this.formatTime(hours)}:{this.formatTime(minutes)}:{this.formatTime(seconds)}
          </div>
          <div className="buttons">
            <button onClick={this.stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={this.startTimer} disabled={isRunning}>Start</button>
            <button onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
