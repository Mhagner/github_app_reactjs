import React from 'react'
import Repos from './repos'
import UserInfo from './user-info'
import Search from './search'
import Actions from './actions'

const AppContent = ({
    handleSearch,
    userinfo,
    getRepos,
    getStarred,
    repos,
    starred,
    isFetching,
    handleClear
}) => (
        <div style={{ paddingLeft: '20px', }} className='tab-container'>

            <Search isDisabled={isFetching} handleSearch={handleSearch} />

            {isFetching && <div>Carregando!!</div>}

            {!!userinfo && <UserInfo userinfo={userinfo} />}

            {!!userinfo &&
                <Actions
                    getRepos={getRepos}
                    getStarred={getStarred}
                    handleClear={handleClear}
                />}

            {!!repos.length &&
                <Repos
                    repos={repos}
                    title='Repositórios'
                    className='repos' />
            }

            {!!starred.length &&
                <Repos
                    repos={starred}
                    title='Favoritos'
                    className='repos' />
            }
        </div>
    )

export default AppContent
