import React from 'react'

const Switch = ({ name, type, rounded }) => (
    <div className="group">
        <div className={`checkbox-toggle ${type} ${(!!rounded)?'rounded':''}`}>
            <input 
                type="checkbox" 
                name="choice1" 
                id="checkbox" />
            <label 
                htmlFor="checkbox">
                {name}
            </label>
        </div>
    </div>
)

export default Switch
