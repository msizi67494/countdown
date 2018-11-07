import React from 'react'

const Controls = ({pause}) =>
    <div className="field is-grouped is-grouped-centered">
        <p className="control">
            <button className="button is-rounded is-outlined is-danger medium" disabled={pause}>
                Pause
            </button>
        </p>
        <p className="control">
            <button style={{marginLeft: 40}} className="button is-rounded is-outlined is-success medium" disabled={!pause}>
                Resume
            </button>
        </p>
    </div>
export default Controls