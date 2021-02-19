import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({users, loading}) => {

    if (loading) {
        return <Spinner />
        
    } else {
        let userItem = users.map(user => {
            return <UserItem user={user} key={user.id} />
        })
        return (
            <div style={userStyle}>
                { userItem }
            </div>
        )
    }
    
}

// use name of component
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
