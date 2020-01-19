import React from 'react'

const Repos = ({ title, repos, className }) => {
    const listRepo = repos.map((repo, index) => (
        <tr key={index}>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td><a href={repo.link}>github</a></td>
        </tr>
    ))

    return (
        <div className='row' style={{ paddingTop: '30px' }}>
            <div className='col-md-7'>
                <div className={className}>
                    <h4>{title}</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listRepo}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Repos