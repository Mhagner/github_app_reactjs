import React from 'react'

const Chip = ({ number, text }) => (
    <div className="chip secondary with-avatar avatar-zoomed dismissable">
        <span className="chip-img">{number}</span>
        {text}
        <button
            className="btn-clear-chip"
            type="button">
        </button>
    </div>
)

export default Chip

