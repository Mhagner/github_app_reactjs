import React, { PropType } from 'react'
import Chip from './chip'

const UserInfo = ({ userinfo }) => (
    <div className='row' style={{ paddingTop: '30px'}}>
        <div className='col-md-2'>
            <img 
                style={{ width: '140px' }} 
                className='img-circle' 
                src={userinfo.avatar_url} 
            />
        </div>
        <div className='col-md-6'>
            <h2>{userinfo.name}</h2>
            <Chip number={userinfo.public_repos} text='Repositórios' />
            <Chip number={userinfo.followers} text='Seguidores'/>
            <Chip number={userinfo.following} text='Seguindo'/>
        </div>
    </div>
)

export default UserInfo
