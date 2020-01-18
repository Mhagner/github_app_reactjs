import React from 'react'

const Button = ({ name, type, getRepos }) => (
    <div>
        <a onClick={getRepos} type='button' className={`btn ${type} outline rounded`} href="#!">
            {name}
        </a>
    </div>
)

export default Button