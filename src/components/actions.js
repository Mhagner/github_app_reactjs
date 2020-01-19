import React from 'react'
import Button from './button'

const Actions = ({ getRepos, getStarred }) => (
    <div className='row' style={{ paddingTop: '30px' }}>
        <div className='col-md-2'>
            <Button
                getRepos={getRepos}
                type='secondary'
                name='Ver repositórios' />
        </div>
        <div className='col-md-2'>
            <Button
                getRepos={getStarred}
                type='secondary'
                name='Ver favoritos' />
        </div>
    </div>
)

export default Actions