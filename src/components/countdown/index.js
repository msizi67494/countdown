import React, { Component } from 'react'
import moment from 'moment'
import Timer from './timer'
import Controls from './controls'
// import Datepicker from './datepicker'

export default class Countdown extends Component {

state = {
    duration: this.getRemainingTime(),
    paused: false,
}

// method to calculate the remaining time in a year
getRemainingTime() {
    let now = moment(),
    newYear = moment({year: now.year() + 1}),
    diff = newYear.diff(now);

    return moment.duration(diff)
}

// handling pause and resume 
handleTogglePaused = () => {
    
    this.setState((prevState, props) => {
        const paused = !prevState.paused

        if (paused) {
            this.pause()
        } else {
            this.resume()
        }
        return {
            paused
        }
    })

}

componentDidMount(){
    this.resume()
}

// disposing the interval when the component is being disposed 
componentWillUnmount(){
    this.pause()
}

// method to pause the timer
pause(){
    clearInterval(this.interval);
}

// method to resume the timer
resume(){
    this.interval = setInterval(() => {
        this.setState({
            duration: this.getRemainingTime()
        })
    }, 1000)
}

render() {

    // destructuring duration from the state
    const { duration, paused} = this.state

    return (
        <section className="hero is-dark is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-centered">
                        New Year is Coming Soon!
                    </h1>
                    <section className="section">
                        <Timer duration={duration}/>
                        {/* <Datepicker/> */}
                    </section>
                    <div>
                        <Controls paused={paused} onPausedToggle={this.handleTogglePaused}/>
                    </div>
                 </div>
            </div>
        </section>    
    )
  }
}
