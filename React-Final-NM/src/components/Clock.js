import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <center> <h2><img className="Clock" src="https://img.icons8.com/android/24/000000/clock.png"/> Time now is: {this.state.date.toLocaleTimeString()}</h2> </center>
        </div>
      );
    }
  }
  
 export default Clock;
