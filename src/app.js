
'use strict'
import React, { Component } from 'react'
import UserInfo from './components/user-info'
import Search from './components/search'
import ajax from '@fdaciuk/ajax'
import Button from './components/button'
import Repos from './components/repos'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            user: null,
            isFetching: false
        }
    }

    getGitHubApiUrl(username, type) {
        const internalUser = username ? `/${username}` : ''
        const internalType = type ? `/${type}` : ''
        return `https://api.github.com/users${internalUser}${internalType}`
    }

    getRepos(type) {
        return (e) => {
            const username = this.state.userinfo.login
            console.log(this.state.userinfo.login)
            ajax().get(this.getGitHubApiUrl(username, type))
                .then((result) => {
                    this.setState({
                        [type]: result.map((repo) => ({
                            name: repo.name,
                            description: repo.description,
                            link: repo.html_url
                        }))
                    })
                })
        }

    }

    handleSearch(e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
            this.setState({ isFetching: true })

            ajax().get(this.getGitHubApiUrl(value))
                .then((result) => {
                    this.setState({
                        userinfo: {
                            name: result.name,
                            avatar_url: result.avatar_url,
                            public_repos: result.public_repos,
                            followers: result.followers,
                            following: result.following,
                            login: result.login
                        },
                        repos: [],
                        starred: []
                    })
                })
                .always(() => this.setState({ isFetching: false }))
        }
    }

    render() {
        return (
            <div style={{ paddingLeft: '20px' }} className='tab-container'>
                <Search handleSearch={(e) => this.handleSearch(e)} />

                {!!this.state.userinfo && <UserInfo userinfo={this.state.userinfo} />}

                {!!this.state.userinfo &&
                    <div className='row' style={{ paddingTop: '30px' }}>
                        <div className='col-md-2'>
                            <Button
                                getRepos={this.getRepos('repos')}
                                type='secondary'
                                name='Ver repositórios' />
                        </div>
                        <div className='col-md-2'>
                            <Button 
                                getRepos={this.getRepos('starred')}
                                type='secondary' 
                                name='Ver favoritos' />
                        </div>
                    </div>
                }

                {!!this.state.repos.length &&
                    <div className='row' style={{ paddingTop: '30px' }}>
                        <div className='col-md-7'>
                            <Repos
                                repos={this.state.repos}
                                title='Repositórios'
                                className='repos' />
                        </div>
                    </div>
                }

                {!!this.state.starred.length &&
                    <div className='row' style={{ paddingTop: '30px' }}>
                        <div className='col-md-7'>
                            <Repos
                                repos={this.state.starred}
                                title='Favoritos'
                                className='repos' />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

