import React, { PropType } from 'react'

const Search = ({ handleSearch, isDisabled }) => (
    <div className='col-md-7'>
        <div className='group'>
            <input
                className='input'
                onKeyUp={handleSearch}
                disabled={isDisabled}
                type='text'
                placeholder='Digite o usuário do Github' />
        </div>
    </div>
)

export default Search
