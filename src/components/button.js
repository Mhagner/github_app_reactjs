import React from 'react'

const Button = ({ name, type, handleAction }) => (
    <div>
        <a 
            onClick={handleAction} 
            type='button' 
            className={`btn ${type} outline rounded`} 
            href="#!">
            {name}
        </a>
    </div>
)

export default Button