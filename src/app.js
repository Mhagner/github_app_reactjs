
'use strict'
import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
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
            <AppContent 
                {...this.state}
                handleSearch={(e) => this.handleSearch(e)}
                getRepos={this.getRepos('repos')}
                getStarred={this.getRepos('starred')}
            />
        )
    }
}

