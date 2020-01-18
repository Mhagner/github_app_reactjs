import React, { PropType } from 'react'

const Search = ({ handleSearch }) => (
    <div className='col-md-7'>
        <div className='group'>
            <input
                className='input'
                onKeyUp={handleSearch}
                type='text'
                placeholder='Digite o usuário do Github' />
        </div>
    </div>
)

export default Search
