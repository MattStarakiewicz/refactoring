class Stopwatch extends React.Component {    
    constructor() {
        super();
        this.state = {
          timerOn: false,
          timerStart: 0,
          timerTime: 0
        };
    }
    
    startTimer() {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.state.timerStart
        });
      }, 10);
    }
    
    stopTimer() {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    }
  
       
    render() {
      const { timerTime } = this.state;
      let miliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
      
      return (
      <div className={'timer'}>
                <div className={'stopwatch-title'}>React Stopwatch</div>
                <div className={'stopwatch'}>
                  {minutes} : {seconds} : {miliseconds}
                </div>
                <nav className={'controls'}>
                  <a href={'#'} className={'button'} onClick={this.startTimer.bind(this)}>Start </a>
                  <a href={'#'} className={'button'} onClick={this.stopTimer.bind(this)}>Stop </a>
                </nav>
      </div>
      );           
     }
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app'));

































