import React from 'react'

const Datepicker = () => 
    <div className="field is-grouped is-grouped-centered" style={{marginBottom: 20, marginTop: 70}} >
        <p className="control">
            <input className="input is-medium is-rounded" placeholder="type a date... " />
        </p>
        <p className="control">
           <button className="button is-rounded is-light isoutlined is-medium">
               Reset
           </button>
        </p>
    </div>

export default Datepicker