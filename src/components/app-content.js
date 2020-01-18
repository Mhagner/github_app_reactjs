import React from 'react'
import Button from './button'
import Repos from './repos'
import UserInfo from './user-info'
import Search from './search'

const AppContent = ({
    handleSearch,
    userinfo,
    getRepos,
    getStarred,
    repos,
    starred,

}) => (
        <div style={{ paddingLeft: '20px' }} className='tab-container'>
            <Search handleSearch={handleSearch} />

            {!!userinfo && <UserInfo userinfo={userinfo} />}

            {!!userinfo &&
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
            }

            {!!repos.length &&
                <div className='row' style={{ paddingTop: '30px' }}>
                    <div className='col-md-7'>
                        <Repos
                            repos={repos}
                            title='Repositórios'
                            className='repos' />
                    </div>
                </div>
            }

            {!!starred.length &&
                <div className='row' style={{ paddingTop: '30px' }}>
                    <div className='col-md-7'>
                        <Repos
                            repos={starred}
                            title='Favoritos'
                            className='repos' />
                    </div>
                </div>
            }
        </div>
    )

export default AppContent
