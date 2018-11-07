import React,{ Component } from 'react'
// import moment = require('moment');
import moment from 'moment';

class Countdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            interval: this.getRemainingTime()
        }
    }
    // method to calculate the remaining year
    getRemainingTime(){
        let now = moment(),
         newYear = moment({year: now.year() + 1}),
         diff = newYear.diff(now);

         return moment.duration(diff)
        // console.log(diff)
    }


    render(){
        return (
            <div>
                <section className="hero is-info  is-bold is-fullheight">
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
                                            <p className="title">3,456</p>
                                        </div>
                                    </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Hours</p>
                                            <p className="title">123</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Minutes</p>
                                            <p className="title">456</p>
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Seconds</p>
                                            <p className="title">789</p>
                                            </div>
                                        </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
    
export default Countdown;
