import React from 'react'
import Button from './button'

const Actions = ({
    getRepos,
    getStarred,
    handleClear
}) => (
        <div className='row' style={{ paddingTop: '30px' }}>
            <div className='col-md-2'>
                <Button
                    handleAction={getRepos}
                    type='secondary'
                    name='Ver repositórios' />
            </div>
            <div className='col-md-2'>
                <Button
                    handleAction={getStarred}
                    type='secondary'
                    name='Ver favoritos' />
            </div>
            <div className='col-md-2'>
                <Button
                    handleAction={handleClear}
                    type='danger'
                    name='Limpar' />
            </div>
        </div>
    )

export default Actions