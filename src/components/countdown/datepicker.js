import React, { Component } from 'react'

export default class datepicker extends Component {
    state = {
        date: ''
    }

    handleDateChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            date: e.target.value
        })
        
    }
  render() {
    const { date } = this.state
    return (
           <form>
               <div className="field is-grouped is-grouped-centered" style={{marginBottom: 20, marginTop: 70}} >
                    <p className="control">
                        <input className="input is-medium is-rounded" value={date} onChange={this.handleDateChange} placeholder="type a date... " />
                    </p>
                    <p className="control">
                    <button className="button is-rounded is-light isoutlined is-medium">
                        Reset
                    </button>
                    </p>
                </div>
           </form>
        )
     }
}
