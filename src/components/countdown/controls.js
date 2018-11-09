import React from 'react'

const Controls = ({paused, onPausedToggle}) =>
    <div className="field is-grouped is-grouped-centered">
        <p className="control">
            <button className="button is-rounded is-outlined is-danger is-medium" style={{marginRight: 30}}
                     disabled={paused}
                     onClick={onPausedToggle}>
                Pause
            </button>
        </p>
        <p className="control">
             <button className="button is-rounded is-outlined is-success is-medium"
                     disabled={!paused}
                     onClick={onPausedToggle}>
                Resume
            </button>
        </p>
    </div>
export default Controls