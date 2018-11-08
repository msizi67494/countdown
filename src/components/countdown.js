import React,{ Component } from 'react'
import moment from 'moment'
import Controls from './controls'

class Countdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            duration: this.getRemainingTime(),
            paused: false
        }

        this.togglePaused = this.togglePaused.bind(this)
    }
    // method to calculate the remaining time in a year
     getRemainingTime() {
        let now = moment(),
         newYear = moment({year: now.year() + 1}),
         diff = newYear.diff(now);

         return moment.duration(diff)
    }

     // handling pause and resume 
     togglePaused(){
         
        this.setState((prevState, props) => {
            const paused = !prevState.paused

            if (paused) {
                clearInterval(this.interval);
            } else {
                setInterval(() => {
                    this.setState({
                       duration: this.getRemainingTime()
                    })
                }, 1000)
            }
            return {
                paused
            }
        })
       
    }


    componentDidMount(){
        this.interval =  setInterval(() => {
             this.setState({
                duration: this.getRemainingTime()
             })
         }, 1000)
    }
    // disposing the interval when the component is being disposed 
    componentWillUnmount(){
      clearInterval(this.interval);
    }
   



    render(){
        // destructuring duration from the state
         const { duration, paused} = this.state

        return (
            <div>
                <section className="hero is-dark is-bold is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                New Year is Coming Soon!
                            </h1>
                            <div className="section">
                                <nav className="level">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Days</p>
                                            <p className="title">{Math.floor(duration.asDays())}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                        <p className="heading">Hours</p>
                                        <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                        <p className="heading">Minutes</p>
                                        <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                        <p className="heading">Seconds</p>
                                        <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                                        </div>
                                    </div>
                                </nav>
                             </div>
                             <div>
                                <Controls
                                  paused={paused} 
                                  onPausedToggle={this.togglePaused}
                                 />
                             </div>
                             
                            <div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
    
export default Countdown;
